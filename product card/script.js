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
    //    element.getElementsByTagName("p")[0].innerHTML = data.products[i].price;
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
        console.log("API Response:", data); // Log the API response for debugging
        // Clear previous search results
        productContainer.innerHTML = "";
        // Display each product as a card
        data.forEach((product) => {
          console.log("Product:", product); // Log each product for debugging
          const productCard = document.createElement("div");
          productCard.className = "product-card";
          productCard.innerText = product.name;
          productContainer.appendChild(productCard);
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  // Event listener for the search button
  searchButton.addEventListener("click", searchProducts);

  // Event listener for the clear button
  clearButton.addEventListener("click", () => {
    // Clear search input
    searchInput.value = "";

    // Re-fetch and display the initial products
    searchProducts();
  });
});

// step 3 api url 1



//fetch api
// fetch('https://dummyjson.com/products/categories')
// .then(response=>{
//   return response.json();
// }).then(json=>{
//   console.log(json);
// })

axios.get("https://dummyjson.com/products/categories")
.then(response => {
  console.log(response.data);
}, err=>{
  console.log(err)
})


axios.get("https://dummyjson.com/products/category/smartphones")
.then(response => {
  console.log(response.data);
}, err=>{
  console.log(err)
})