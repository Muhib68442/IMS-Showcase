// JS
console.log("JS Connected from libs/js/main.js");



document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.btn-label').forEach(function(label) {
            label.classList.remove('checked');
        });
        if (this.checked) {
            this.parentNode.classList.add('checked');
        }
    });
});

document.querySelector('#cancel-button').addEventListener('click', function() {
    document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        if (radio.checked) {
            radio.checked = false;
            radio.parentNode.classList.remove('checked');
        }
    });
});
