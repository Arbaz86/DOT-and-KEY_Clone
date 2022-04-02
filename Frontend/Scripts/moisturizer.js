import { navBar, navInt, navcar } from "../Componentes/navBar.js";
import { footer } from "../Componentes/footer.js";
document.querySelector("#navInterval").innerHTML = navInt();
let i = 0;
navcar(i);
document.querySelector("#navbar").innerHTML = navBar();
document.querySelector("#footer").innerHTML = footer();
import { createProductCard } from "./main.js";

let parent = document.getElementById("product-grid");

let url = "http://ec2-13-235-68-193.ap-south-1.compute.amazonaws.com:4000/moisturizer";

let data = async () => {
  try {
    let res = await fetch(url);
    let Data = await res.json();
    createProductCard(Data, parent);
    console.log(Data);
  } catch (err) {
    console.log(err);
  }
};
data();

// createProductCard(serum_data, parent);
document.querySelector("#leftNav > img ").addEventListener("click", () => {
  location.href = "index.html";
});
document.querySelector("#cartBag ").addEventListener("click", () => {
  location.href = "cart.html";
});

document.querySelector("#filter_sorting").innerHTML = filter_sort();

document.querySelector("#select_featured").onchange = () => {
  //  console.log(1)
  if (document.querySelector("#select_featured").value == "LTH") {
    let filteredarr = arr.sort(function (a, b) {
      return a.price - b.price;
    });
    // console.log(filteredarr);
    data(parent, filteredarr);
  }

  if (document.querySelector("#select_featured").value == "HTL") {
    let filteredarr = arr.sort(function (a, b) {
      return b.price - a.price;
    });
    //  console.log(filteredarr);
    data(parent, filteredarr);
  }

  if (document.querySelector("#select_featured").value == "ATZ") {
    let filteredarr = arr.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    //  console.log(filteredarr);
    data(parent, filteredarr);
  }

  if (document.querySelector("#select_featured").value == "ZTA") {
    let filteredarr = arr.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    //   console.log(filteredarr);
    data(parent, filteredarr);
  }
};
