const button1 = document.getElementById('boton1');
const popup1 = document.querySelector('.popup-wrapper1');
const close1 = document.querySelector('.popup-close1');


button1.addEventListener('click', () => {
    popup1.style.display = 'block';
});
 
close1.addEventListener('click', () => {
    popup1.style.display = 'none';
});
 
popup1.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper1') {
        popup1.style.display = 'none';
    }
});