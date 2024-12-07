document.querySelector('.btn').addEventListener('click', () => {
    const button = document.querySelector('.btn');
    const nameContainer = document.querySelector('.name-container');
    const nameInput = document.querySelector('.name-input');
    
    // Fade out button and show the name input
    button.style.display = 'none';
    nameContainer.style.display = 'block';
    
    setTimeout(() => {
        nameInput.classList.add('show');
        nameInput.focus();
    }, 500);  // Add a delay before showing the input box

    // Handle Enter key press
    nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && nameInput.value.trim() !== "") {
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = 'game.html';
            }, 500);
        }
    });
});
