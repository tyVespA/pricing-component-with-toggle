const checkbox = document.getElementById("checkbox");
const pricing = document.querySelector(".pricing-components-section")

checkbox.addEventListener("change", () => {
   pricing.classList.toggle("show-monthly")
})

