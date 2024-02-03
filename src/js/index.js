openHamburgerBar = () => {
    event.preventDefault();
    const menuList = document.getElementById('menu-list');
    if(menuList.style.display == 'block'){
        menuList.style.display = 'none';
    }else{
        menuList.style.display = 'block';
    }
};


change = (src) => {
    const mainPicture = document.getElementById('main-picture');
    const thumbPicture = document.getElementById('src')

    mainPicture.src = src;
    thumbPicture.classList.replace('opacity-60','opacity-100');
};
