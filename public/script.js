const  btnSi = document.querySelector('#btnSi');

btnSi.addEventListener('click', function () {
    alert('Sabia que ibas a decir que sí mi amor')
})

const btnNo = document.querySelector('#btnNo');

btnNo.addEventListener('mouseover', function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    btnNo.style.setProperty('top', randomY+'%');
    btnNo.style.setProperty('left', randomX+'%');
    btnNo.style.setProperty('transform',`translate(-${randomX}%, -${randomY}%)`);
})