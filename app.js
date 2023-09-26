console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const UrlAddress = "https://api.giphy.com/v1/gifs/translate";
const apiKey = "dDiB2TbsVlgYtU3itSJwjhR5dM6PUZXj";

let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gif = document.querySelector("#imageContainer > img");
let feedback = document.querySelector("#feedback");

console.log(feedback);
console.log(searchInput);

//Exercise 2
const searchTerm = searchInput.value;
const url = `data.images.original.url`;
searchBtn.addEventListener("click", (event) => {
  fetch(`${UrlAddress}?api_key=${apiKey}&s=${searchInput.value}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      if (Array.isArray(result.data) && result.data.length <= 0) {
        feedback.textContent = "No gifs found";
      } else {
        gif.src = result.data.images.original.url;
        searchInput.value = "";
      }
    })
    .catch((error) => {
      console.error(error);
      feedback.textContent = error.message;
    });
});
