const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const accordion = [...$$('.accordion')];
const items = [...$$('.accordion-item')];
const btns = [...$$('.accordion-header')];
const bodies = [...$$('.accordion-body')];


btns.forEach( btn => {
    btn.addEventListener('click', () => {
        const parent = btn.parentNode;        
        const itemActive = $('.accordion-item.show');
        itemActive?.classList.remove('show');  
        parent.classList.add('show');
        items.forEach( item => {
            const span = item.querySelector('span');
            item.classList.contains('show') ? span.innerText ='-': span.innerText ='+';
            
        })
    })
});


