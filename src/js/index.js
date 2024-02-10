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

    console.log(allThumb);

    for(let i = 0; i < allThumb.length; i++){
        allThumb[i].classList.replace('opacity-100', 'opacity-60');
        
    };
    


    currentImage.src = src;
    newImage.classList.replace('opacity-60', 'opacity-100');
    
};


colorClick = (id) => {
    event.preventDefault();
    const colorBtnos = document.getElementsByClassName('color-button');
    const colorClickk = document.getElementById(id);


    console.log(colorClickk);
    for(let i = 0; i < colorBtnos.length; i++){
        colorBtnos[i].classList.replace('bg-gray-800', 'bg-white');
        colorBtnos[i].classList.replace('text-white', 'text-gray-800');
        colorBtnos[i].classList.replace('hover:bg-gray-800', 'hover:bg-gray-300');
    }


    colorClickk.classList.replace('bg-white', 'bg-gray-800');
    colorClickk.classList.replace('text-gray-800', 'text-white');
    colorClickk.classList.replace('hover:bg-gray-300', 'hover:bg-gray-800');

}

sizeClick = (id) => {
    event.preventDefault();
    const sizeBtnos = document.getElementsByClassName('size-button');
    const sizeClickk = document.getElementById(id);


    console.log(sizeClickk);
    for(let i = 0; i < sizeBtnos.length; i++){
        sizeBtnos[i].classList.replace('bg-gray-800', 'bg-white');
        sizeBtnos[i].classList.replace('text-white', 'text-gray-800');
        sizeBtnos[i].classList.replace('hover:bg-gray-800', 'hover:bg-gray-300');
    }


    sizeClickk.classList.replace('bg-white', 'bg-gray-800');
    sizeClickk.classList.replace('text-gray-800', 'text-white');
    sizeClickk.classList.replace('hover:bg-gray-300', 'hover:bg-gray-800');
}