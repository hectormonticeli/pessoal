function clickMenuLogin() {
    openButton = document.getElementById('open');
    closeButton = document.getElementById('close');
    menu = document.getElementById('login-signup');

    if (openButton.style.display == 'block') {
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
        menu.style.display = 'block';
    }
    else {
        openButton.style.display = 'block';
        closeButton.style.display = 'none';
        menu.style.display = 'none';
    }
}