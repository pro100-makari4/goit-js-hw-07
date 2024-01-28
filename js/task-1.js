const categories = document.querySelectorAll(".item");

console.log("Number of categories: " + categories.length);

categories.forEach((element) => {
    console.log(element.querySelector("h2").textContent);
    console.log(element.querySelectorAll("li").length);
});
