openHamburgerBar = () => {
    event.preventDefault();
    const menuList = document.getElementById('menu-list');
    if(menuList.style.display == 'block'){
        menuList.style.display = 'none';
    }else{
        menuList.style.display = 'block';
    }
};


changePicture = (src) => {
    const mainPicture = document.getElementById('main-picture');
    const thumbPicture = document.getElementById('src')

    mainPicture.src = src;
    thumbPicture.classList.add('focus');
};


activeButton = (clickedButton) => {
  let buttons = ['white-button', 'black-button'];

  buttons.forEach(element => {
    let currentButton = document.getElementById(element);

    if(currentButton === clickedButton){
        currentButton.style.backgroundColor = 'bg-gray-800';
        currentButton.style.color = '#f6f6f6';
    }else{
        currentButton.style.backgroundColor = '';
        currentButton.style.color = '';
    }
  });

};