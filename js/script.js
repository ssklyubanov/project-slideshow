let i = 0; //точка начала
let images = [];
let time = 3000;

//список изображений
images[0] = 'img/1.png';
images[1] = 'img/2.png';
images[2] = 'img/3.png';
images[3] = 'img/4.png';
images[4] = 'img/5.png';


//функция - изменить изображение
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
