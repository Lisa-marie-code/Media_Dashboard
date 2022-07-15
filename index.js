const darkMode = document.getElementById("checkbox");
const body = document.querySelector("body");


const currentTheme = localStorage.getItem("theme");
if(currentTheme == "dark"){
    document.body.classList.add("dark-theme");
}

function toggleTheme(){
    document.body.classList.toggle("dark-theme");

    let theme = "light";
if(document.body.classList.contains("dark-theme")){
    theme = "dark";
}

localStorage.setItem("theme",theme);
}



