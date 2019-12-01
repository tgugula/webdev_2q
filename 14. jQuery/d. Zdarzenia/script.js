/*window.onload = function () {*/
$(function () {

    let clickCounter = 0;
    let dblClickCounter = 0;
    let keyDownCounter = 0;

    $(document).on('click', function () {
        $('#click-counter').text(++clickCounter)
    }
}
/*    document.addEventListener('click', function () {
        document.getElementById('click-counter').textContent = ++clickCounter;
          });

    document.addEventListener('dblclick', function () {
        document.getElementById('dbl-click-counter').textContent = ++dblClickCounter;
    });

    document.addEventListener('keydown', function () {
        document.getElementById('key-down-counter').textContent = ++keyDownCounter;
    });

    let button = document.getElementById('add-element');
    let boxContainer = document.getElementById('box-container');

    button.addEventListener('click', function () {
        let nowyElement = document.createElement('div');
        nowyElement.classList.add('box');
        boxContainer.appendChild(nowyElement);
    });

    boxContainer.addEventListener('click', function (e) {
        console.log(e);
if (e.target.className.includes('box')){
    this.removeChild(e.target);*/

let button = $('#add-element');
let boxContainer = $('#box-container');

button.on('click', function() {
    let nowyElement = $ ('<div class="box"></div>')
boxContaintainer.on('click', '.box', function() {
    $(this).remove();
    })
});