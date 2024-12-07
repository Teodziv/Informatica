document.querySelector('.btn').addEventListener('click', () => {
    const button = document.querySelector('.btn');
    const nameContainer = document.querySelector('.name-container');
    const nameInput = document.querySelector('.name-input');

    button.style.display = 'none';
    nameContainer.style.display = 'block';
    
    setTimeout(() => {
        nameInput.classList.add('show');
        nameInput.focus();
    }, 500); 

    nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && nameInput.value.trim() !== "") {
            localStorage.setItem('nomeUtente', nameInput.value.trim().substring(0, 15));
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = 'game.html';
            }, 500);
        }
    });
});