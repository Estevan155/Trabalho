const sideMenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn")
const closebtn = document.querySelector("#close-btn")
const themetoggler = document.querySelector(".themetoggler")

menubtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closebtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themetoggler.addEventListener('click', () => {
    document.body.closelist.toggler('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})