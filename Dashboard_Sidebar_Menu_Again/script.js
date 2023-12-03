const body = document.querySelector("body"),
        sidebar = document.querySelector(".sidebar"),
        arrow = document.querySelector(".arrow"),
        searchİcon = document.querySelector(".search i"),
        mode = document.querySelector(".toggle-switch"),
        modeText = document.querySelector(".mode-text");


arrow.addEventListener("click", () => {
    if(sidebar.classList.contains("close")){
        sidebar.classList.remove("close");
        return;
    }
    sidebar.classList.add("close");
})

searchİcon.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

mode.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerHTML = "Light Mode"
    }else{
        modeText.innerHTML = "Dark Mode"
    }
})