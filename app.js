const header = document.querySelector('header')
const popup = document.querySelector(".popup")
const cookieBtns = document.querySelectorAll(".cookie-btn")

document.body.onscroll = () => {

    if (document.body.scrollTop == 0) {
        header.classList.remove('header-bg')
    } else {
        header.classList.add('header-bg')
    }

}

window.onload = function () {

    let isSaved = localStorage.getItem('popup') || null

    if (!isSaved) {
        setTimeout(function () {
            popup.classList.add('show-popup')
        }, 2000)
    }
}

cookieBtns.forEach(function(cookieBtn) {
    cookieBtn.addEventListener("click", function () {
        setTimeout(function () {
            popup.classList.remove('show-popup')
        }, 1000)

        localStorage.setItem("popup", true)
    } )

})