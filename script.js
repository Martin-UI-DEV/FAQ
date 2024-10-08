const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const btns = [...$$('.accordion-header')];

btns.forEach( btn => {
    btn.addEventListener('click', () => {accordionToggle(btn)} )
});

function accordionToggle(btn) {
    const parent = btn.parentNode;
    const itemActive = $('.accordion-item.show');
    if (itemActive && itemActive !== parent) {
        itemActive.classList.remove('show');
    }
    parent.classList.toggle('show');
    changeIcon()
}

function changeIcon() {
    const items = [...$$('.accordion-item')];
    items.forEach(item => {
        const span = item.querySelector('span');
        item.classList.contains('show') ? span.innerText = '-' : span.innerText = '+';

    })
}
