mizunoClick = 0;
clicked = 0;
symbol = 0;

function clickMenuLogin() {
    openButton = document.getElementById('open');
    closeButton = document.getElementById('close');
    menu = document.getElementById('login-signup');
    main = document.getElementById('main');

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

/* function filterByBrand() {
    mizunoCards = document.getElementsByClassName('mizuno');
    nikeCards = document.getElementsByClassName('nike');
    adidasCards = document.getElementsByClassName('adidas');
    umbroCards = document.getElementsByClassName('umbro');
    
    mizunoCards.style.display = 'none';
} */

function checked() {
    mizunoClick += 1;

    if(mizunoClick % 2 == 1) {
        mizuno.style.background = '#BB342F';
        mizuno.style.color = 'white';
    }
    else if (clicked % 2 == 0) {
        mizuno.style.background = 'transparent';
        mizuno.style.color = '#D90429';
    }
}

/*  onmouseover="this.style.background = '#BB342F'" onmouseout="if(mizunoClick % 2 == 0){this.style.background = 'transparent'}" */