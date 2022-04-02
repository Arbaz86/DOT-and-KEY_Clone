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
  let login_data = {
    email: document.querySelector("#login-username").value,
    password: document.querySelector("#login-password").value,
  };

  let login_data_json = JSON.stringify(login_data);

  try {
    let res = await fetch(`http://ec2-13-235-68-193.ap-south-1.compute.amazonaws.com:4000/login`, {
      method: "POST",
      body: login_data_json,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data.error);
    if (data.message == undefined) {
      // localStorage.setItem("loginData", data.error);
      alert("Logged In Successfully");
      window.location.href = "index.html";
    } else {
      alert(data.message);
    }

    // getData(data.token, login_data.username);
  } catch (error) {
    console.log(error);
  }
};

// let google = document.getElementById("google");

// google.onclick()= ()=>{
//   console.log("clicked");
// }
let gogle = document.querySelector("#google");
gogle.onclick = async () => {
  try {
    console.log("clicked");
    window.location.href = "http://ec2-13-235-68-193.ap-south-1.compute.amazonaws.com:4000/auth/google/";
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
