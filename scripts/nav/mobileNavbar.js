export default function mobileNavbar(mMenu, nList, nLinks) {
    const mobileMenu = document.querySelector(mMenu);
    const navList = document.querySelector(nList);
    const navLinks = document.querySelectorAll(nLinks);

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            navLinks.forEach(link => {
                link.style.animation ? link.style.animation = '' : link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s';
            });
        });
    }

}