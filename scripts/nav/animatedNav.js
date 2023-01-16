const sections = document.querySelectorAll('main section[id]');

export default function activateMenuAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 9.39) * 1.1;
    
    for (const section of sections) {
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= section.offsetTop;
        const checkpointEnd = checkpoint <= (section.offsetTop + section.offsetHeight);

        if (checkpointStart && checkpointEnd) {
        document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
        document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}