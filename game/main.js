const closeButton = document.getElementById('closeButton');
const rightUI = document.querySelector('.RightUI');

function showCloseButton() {
    closeButton.style.display = 'block';
    rightUI.style.display = 'none';
}

closeButton.addEventListener('click', function() {
    closeButton.style.display = 'none';
    rightUI.style.display = 'flex';
});

function button1Click() {
    console.log("Button 1 clicked");
    showCloseButton();
}

function button2Click() {
    console.log("Button 2 clicked");
    showCloseButton();
}

function button3Click() {
    console.log("Button 3 clicked");
    showCloseButton();
}
