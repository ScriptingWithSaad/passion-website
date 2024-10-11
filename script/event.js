document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.details-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked');
            const details = this.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Less Details';
            } else {
                details.style.display = 'none';
                this.textContent = 'More Details';
            }
        });
    });
});