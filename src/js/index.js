openHamburgerBar = () => {
    event.preventDefault();
    const menuList = document.getElementById('menu-list');
    if(menuList.style.display == 'block'){
        menuList.style.display = 'none';
    }else{
        menuList.style.display = 'block';
    }
};





changePicture = (src, id) => {
    const currentImage = document.getElementById('main-picture');
    const newImage = document.getElementById(id);
    const allThumb = document.getElementsByClassName('img');

    for(let i = 0; i < allThumb.length; i++){
        allThumb[i].classList.replace('opacity-100', 'opacity-60');
    }

    newImage.classList.replace('opacity-60', 'opacity-100');
    currentImage.src = src;

};