document.querySelectorAll('.toggle-info').forEach(button => {
    button.addEventListener('click', function() {
        const extraInfo = this.nextElementSibling;
        extraInfo.classList.toggle('hidden');
        this.textContent = extraInfo.classList.contains('hidden') ? 'More Info' : 'Less Info';
    });
});
