// plus sign code  + click 
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        item.querySelector('.plus').textContent = answer.style.display === 'block' ? '-' : '+';
    });
});

