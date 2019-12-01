function pierwszaFunkcja() {
    console.log('Jakaś wartość');
    }

  /*  pierwszaFunkcja();*/
function wypiszTekst(parametr) {
    console.log(parametr);
}
/*
wypiszTekst('przykładowy tekst')*/

/*
function suma(a, b) {
    console.log('Suma');
    let sum = a + b;
    console.log(sum);

}

suma(1, 5);*/

function suma2(a, b) {
    return a + b;
}
/*let sum =suma2(1, 3);
console.log(sum);*/

let a = 5;
function modyfikuj(liczba) {
    liczba = 1;
}
    console.log(a);
    modyfikuj(a);
    console.log(a);

    let array = ['jeden', 'dwa', 'trzy'];

    function modyfikuj2(tablica) {
        tablica[0] = "nowa wartość";
    }

    console.log(array);
    modyfikuj2(array);
    console.log(array);

