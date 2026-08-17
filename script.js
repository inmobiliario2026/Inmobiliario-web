
const menu=document.querySelector('.menu'), nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('[data-placeholder="whatsapp"]').addEventListener('click',e=>{
  e.preventDefault(); alert('Aquí conectaremos el número real de WhatsApp de AVERUM.');
});
