const button2 = document.getElementById('boton2');
const popup2 = document.querySelector('.popup-wrapper2');
const close2 = document.querySelector('.popup-close2');


button2.addEventListener('click', () => {
    popup2.style.display = 'block';
});
 
close2.addEventListener('click', () => {
    popup2.style.display = 'none';
});
 
popup2.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper2') {
        popup2.style.display = 'none';
    }
});