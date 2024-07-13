function clickMenuLogin() {
    openButton = document.getElementById('open');
    closeButton = document.getElementById('close');

    if (openButton.style.display == 'block') {
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
    }
}