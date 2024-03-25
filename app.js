const header = document.querySelector('header')
const cookies = document.querySelector(".cookies")
const cookieBtns = document.querySelectorAll(".cookie-btn")

document.body.onscroll = () => {

    if (document.body.scrollTop == 0) {
        header.classList.remove('header-bg')
    } else {
        header.classList.add('header-bg')
    }

}

window.onload = function () {
    let isSaved = localStorage.getItem('cookies') || null

    if (!isSaved) {
        setTimeout(function () {
            cookies.classList.add('show-cookies')
        }, 2000)
    }
}

cookieBtns.forEach(function(cookieBtn) {
    cookieBtn.addEventListener("click", function () {
        setTimeout(function () {
            cookies.classList.remove('show-cookies')
        }, 1000)

        localStorage.setItem("cookies", true)
    } )

})