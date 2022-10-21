var OpenTheme = document.getElementById("Style");
var StoredTheme = localStorage.getItem("Theme");
var Theme = document.getElementById("Style");
var DocName = window.location.pathname;
DocName = DocName.split("/");

if (StoredTheme && DocName[1]){
    if (StoredTheme == "dark"){
        Theme.setAttribute("href", "/Assets/CSS/"+DocName+"/DarkMode.CSS")
    } else if (StoredTheme == "light"){
        Theme.setAttribute("href", "/Assets/CSS/"+DocName+"/LightMode.CSS")
    }
} else if(DocName[1] == ""){
        OpenTheme.setAttribute("href", "/Assets/CSS/,Home.html/DarkMode.CSS")
} else{
    Theme.setAttribute("href", "/Assets/CSS/"+DocName+"/DarkMode.CSS")
}


function ChangeTheme() {
if (Theme.getAttribute("href") == "/Assets/CSS/"+DocName+"/DarkMode.CSS"){
    Theme.setAttribute("href", "/Assets/CSS/"+DocName+"/LightMode.CSS")
    localStorage.setItem("Theme", "light")
} else{
    Theme.setAttribute("href", "/Assets/CSS/"+DocName+"/DarkMode.CSS")
    localStorage.setItem("Theme", "dark")
}
}
