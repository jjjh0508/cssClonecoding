const moreBtn = document.querySelector('.infoAndUpNext .info .metadate .titleAndButton .moreBtn');
const title = document.querySelector('.infoAndUpNext .info .metadate .titleAndButton .title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});