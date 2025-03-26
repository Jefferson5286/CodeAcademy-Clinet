function handleNavigationMenu() {
    const menu = document.querySelector('#menu')
    const menuButton = document.querySelector('#menu-button')
    const menuButtonIcon = document.querySelector('#menu-button ion-icon')

    menuButton.addEventListener('click', (e) => {
        menuButtonIcon.setAttribute(
            'name',
            menu.classList.contains('scale-y-100') ? 'ellipsis-vertical' : 'close'
        )

        menu.classList.toggle('scale-y-100')
        menu.classList.toggle('opacity-100')
    })
}

document.addEventListener('DOMContentLoaded', () => {
    handleNavigationMenu()
})