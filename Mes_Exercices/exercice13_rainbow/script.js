const localStock = document.getElementById("local");
const sessionStock = document.getElementById("session");
const background=document.getElementById("rainbowIcone");
const navBackground=document.getElementById("navIcone");
const theme = document.querySelector("#theme_css");



function ChangerBackground()
{
    if (background.className=="fas fa-toggle-off")
    {
        background.className="fas fa-toggle-on";
        theme.href = "rainbow.css";
    }
    else if (background.className=="fas fa-toggle-on")
    {
        background.className="fas fa-toggle-off";
        theme.href = "default.css";
    }

    if (localStock.checked)
    {
        
        let localValeur=theme.getAttribute('href');
        localStorage.setItem('localBackground', localValeur);
    }
    if (sessionStock.checked)
    {
        
        let sessionValeur=theme.getAttribute('href');
        sessionStorage.setItem('sessionBackground', sessionValeur);
    }
    
}

function AfficherTheme()
{
    if (localStorage.getItem('localBackground') !==null) {
        theme.setAttribute('href',localStorage.getItem('localBackground'));
        if (theme.getAttribute('href')==="default.css")
        {
            background.className="fas fa-toggle-off";
            
        }
        else if (theme.getAttribute('href')==="rainbow.css")
        {
            background.className="fas fa-toggle-on";
            
        }
    }
    else if (sessionStorage.getItem('sessionBackground') !==null) {
        theme.setAttribute('href',sessionStorage.getItem('sessionBackground'));
        if (theme.getAttribute('href')==="default.css")
        {
            background.className="fas fa-toggle-off";
            
        }
        else if (theme.getAttribute('href')==="rainbow.css")
        {
            background.className="fas fa-toggle-on";
            
        }
    }
}

AfficherTheme();

function ClearStockage() {
    localStorage.removeItem('localBackground');
    sessionStorage.removeItem('sessionBackground');
}







const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


