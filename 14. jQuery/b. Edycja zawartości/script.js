/*
window.onload = function () {
    document.getElementById('element1').textContent = 'Nowa wartość';
    document.getElementById('element2').innerHTML = '<b>Nowa wartość pogrubiona </b>';

}*/

$ (function () {
   $('#element1').text('Nowa wartość');
    $('#element2').html('<b>Nowa wartość pogrubiona</b>');

});