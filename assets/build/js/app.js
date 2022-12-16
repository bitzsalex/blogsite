import Alpine from 'alpinejs'
const feather = require('feather-icons')
 
window.Alpine = Alpine
 
Alpine.start()
feather.replace()

// getting the toggler button
const themeToggler = document.querySelector("button.theme__toggler")

if (themeToggler) {
    // on click
    themeToggler.addEventListener('click', () => {
        currentTheme = localStorage.getItem("theme")
        themeSwitch(currentTheme == "dark" ? "light" : "dark")
    })
}

// theme vars
const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

// icon toggler
const themeIconToggler = theme => {
    if (theme == "dark") {
        sun.classList.add("active")
        moon.classList.remove("active")
    } else {
        moon.classList.add("active")
        sun.classList.remove("active")
    }
}

// Initial Theme check
const themeCheck = () => {
    if (userTheme)
        themeSwitch(userTheme)
    else if (systemTheme)
        themeSwitch("dark")
    else
        themeSwitch("light")
}

// theme switch
const themeSwitch = theme => {
    if (theme == "dark") {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
    } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
    }
}

// running initial check
themeCheck()