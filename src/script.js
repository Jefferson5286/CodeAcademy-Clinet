function handleNavigationMenu() {
    const menu = document.querySelector('#menu')
    const menuButton = document.querySelector('#menu-button')
    const menuButtonIcon = document.querySelector('#menu-button ion-icon')
    
    const toggleMenu = () => {
        menuButtonIcon.setAttribute(
            'name',
            menu.classList.contains('scale-y-100') ? 'ellipsis-vertical' : 'close'
        )
        menu.classList.toggle('scale-y-100')
        menu.classList.toggle('opacity-100')
    }
    
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation()
        toggleMenu()
    })
    
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            if (menu.classList.contains('scale-y-100')) {
                toggleMenu()
            }
        }
    })
    
    menu.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}

function handleProfileModal() {
    const openModal = document.getElementById('openProfileModal');
    const closeModal = document.getElementById('closeProfileModal');
    const modal = document.getElementById('profileModal');

    const signLink = document.getElementById('signupLink');
    const profileButtonContainer = document.getElementById('profileButtonContainer');

    if (localStorage.getItem('token')) {
        signLink.classList.add('hidden');
        profileButtonContainer.classList.replace('hidden', 'block');

        openModal.addEventListener('click', () => {
            modal.classList.replace('hidden', 'flex');
        });

        closeModal.addEventListener('click', () => {
            modal.classList.replace('flex', 'hidden');
        });

        // Fechar ao clicar fora do modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.replace('flex', 'hidden');
            }
        });

        // Fechar ao pressionar a tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('flex')) {
                modal.classList.replace('flex', 'hidden');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleNavigationMenu()
    handleProfileModal()
})