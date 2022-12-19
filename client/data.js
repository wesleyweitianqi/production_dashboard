const search = document.getElementsByClassName("search-button")[0];
const woInput = document.getElementsByName("crexwono")[0];
woInput.textContent = "E15506"
search.addEventListener("click", async () => {
    $(document).ready(function () {
        console.log("clicked")
        const result = document.getElementsByClassName("search-results")[0];
        console.log("🚀 ~ file: data.js:5 ~ window.addEventListener ~ result", result)
    })
})