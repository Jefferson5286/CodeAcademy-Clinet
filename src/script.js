const tree = {
    nav: {
        menu: document.querySelector('#menu'),
        btn: document.querySelector('#menu-button'),
        btnIcon: document.querySelector('#menu-button ion-icon')
    }
}


tree.nav.btn.addEventListener('click', () => {
    tree.nav.btnIcon.setAttribute(
        'name',
        tree.nav.menu.classList.contains('scale-y-100') ? 'ellipsis-vertical' : 'close'
    )

    tree.nav.menu.classList.toggle('scale-y-100')
    tree.nav.menu.classList.toggle("opacity-100")
});