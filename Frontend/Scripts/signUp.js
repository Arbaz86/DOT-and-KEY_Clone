import { footer } from "../Componentes/footer.js";
document.querySelector("#footer").innerHTML = footer();
import { navBar, navInt, navcar } from "../Componentes/navBar.js";
document.querySelector("#navInterval").innerHTML = navInt();
let i = 0;
navcar(i);
document.querySelector("#navbar").innerHTML = navBar();
let btn = document.getElementById("button1");
btn.onclick = async (event) => {
  event.preventDefault();

  let register_data = {
    firstname: document.querySelector("#name").value,
    lastname: document.querySelector("#last_name").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  register_data = JSON.stringify(register_data);
  try {
    let res = await fetch(`http://localhost:4000/register`, {
      method: "POST",
      body: register_data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    if (data.message == undefined) {
      alert("Account Created Successfully");
      window.location.href = "login.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
  }
};

let gogle = document.querySelector("#google");
gogle.onclick = async () => {
  try {
    console.log("clicked");
    window.location.href = "http://localhost:4000/auth/google/";
  } catch (error) {
    console.log(error);
  }
};

document.querySelector("#leftNav > img ").addEventListener("click", () => {
  location.href = "index.html";
});
document.querySelector("#cartBag ").addEventListener("click", () => {
  location.href = "cart.html";
});
