async function getData() {
  let cards = document.querySelectorAll(".card");
  let response = await fetch("https://dummyjson.com/products?limit=15");
  let data = await response.json();
  console.log(data.products);

  cards.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = data.products[i].images[0];
    element.getElementsByTagName("h1")[0].innerHTML = data.products[i].title;
    element.getElementsByTagName("h2")[0].innerHTML = data.products[
      i
    ].description.slice(0, 20);
    element.getElementsByTagName("h3")[0].innerHTML =
      "Price : $" + data.products[i].price;

  });
}
getData();

function addtocart() {
  alert("Added to cart");
}

//search button query

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const productContainer = document.getElementById("product-container");
  const clearButton = document.getElementById("clear-button");

  // Function to fetch and display products based on the search query
  function searchProducts() {
    const searchText = searchInput.value;
    const apiUrl = `https://dummyjson.com/products/search?q=${searchText}`;

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); 
        // Clear previous search results
        productContainer.innerHTML = "";
        // Display each product as a card
        (product) => {
          console.log("Product:", product); 
          const productCard = document.createElement("div");
          productCard.className = "product-card";
          productCard.innerText = product.name;
          productContainer.appendChild(productCard);
        };
      })
      .catch((error) => console.error("Error:", error));
  }

  // Event listener for the search button
  searchButton.addEventListener("click", searchProducts);

  // Event listener for the clear button
  clearButton.addEventListener("click", () => {
    // Clear search input
    searchInput.value = "";

    searchProducts();
  });
});

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  btn.innerHTML = "An apple mobile which is nothing like apple";
  btn.style.color = "green";
});

var btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function () {
  btn1.innerHTML =
    "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip";
  btn1.style.color = "green";
});

var btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function () {
  btn2.innerHTML =
    "Samsung's new variant which goes beyond Galaxy to the Universe";
  btn2.style.color = "green";
});

var btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", function () {
  btn3.innerHTML = "OPPO F19 is officially announced on April 2021.";
  btn3.style.color = "green";
});

var btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", function () {
  btn4.innerHTML =
    "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK";
  btn4.style.color = "green";
});

var btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", function () {
  btn5.innerHTML =
    "MacBook Pro 2021 with mini-LED display may launch between September, November";
  btn5.style.color = "green";
});

var btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", function () {
  btn6.innerHTML =
    "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched";
  btn6.style.color = "green";
});

var btn7 = document.querySelector(".btn7");
btn7.addEventListener("click", function () {
  btn7.innerHTML =
    "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen";
  btn7.style.color = "green";
});

var btn8 = document.querySelector(".btn8");
btn8.addEventListener("click", function () {
  btn8.innerHTML =
    "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty";
  btn8.style.color = "green";
});

var btn9 = document.querySelector(".btn9");
btn9.addEventListener("click", function () {
  btn9.innerHTML =
    "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10";
  btn9.style.color = "green";
});
var btn10 = document.querySelector(".btn10");
btn10.addEventListener("click", function () {
  btn10.innerHTML =
    "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil";
  btn10.style.color = "green";
});
var btn11 = document.querySelector(".btn11");
btn11.addEventListener("click", function () {
  btn11.innerHTML = "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml";
  btn11.style.color = "green";
});
var btn12 = document.querySelector(".btn12");
btn12.addEventListener("click", function () {
  btn12.innerHTML =
    "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men";
  btn12.style.color = "green";
});
var btn13 = document.querySelector(".btn13");
btn13.addEventListener("click", function () {
  btn13.innerHTML =
    "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil";
  btn13.style.color = "green";
});
var btn14 = document.querySelector(".btn14");
btn14.addEventListener("click", function () {
  btn14.innerHTML =
    "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality";
  btn14.style.color = "green";
});

// Step 3

async function abcd(){
  const raw = await fetch("https://dummyjson.com/products/categories")
  const ans = await raw.json()
  console.log(ans)
}
abcd()

axios.get("https://dummyjson.com/products/category/smartphones")
.then(response => {
  console.log(response.data);
}, err=>{
  console.log(err)
})

// https://651e4672b9e1313dbc1373e2--rad-hotteok-7f5a62.netlify.app/
