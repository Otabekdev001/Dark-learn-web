/* const otabek ='toxtamurodov';
const number =15;
console.log(number);
console.log(17);
console.log(otabek);
 */

/* const elLogoLink=document.querySelector('.site-header-logo');

const ellLogoText =document.querySelector('.change-logo-text');
ellLogoText.addEventListener('click' , function(){
       elLogoLink.textContent ='boshqa rasm';
}) */


const ellDarkLink =document.querySelector('.site-header-Dark');
const ellLightkLink =document.querySelector('.site-header-light');

ellDarkLink.addEventListener('click' ,function(){
      document.body.classList.add('dark-mode');
})

ellLightkLink.addEventListener('click' ,function(){
    document.body.classList.remove('dark-mode');
})