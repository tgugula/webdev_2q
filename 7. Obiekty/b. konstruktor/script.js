function Osoba(imieP, nazwiskoP) {
    this.imie = imieP;
    this.nazwisko = nazwiskoP;

    this.przedstawSie = function () {
        console.log('Nazywam sie ' +this.imie + ' ' + this.nazwisko);
    }

}
let osoba = new Osoba( ' Jan', 'Kowalski');
let osoba2 = osoba;
osoba.przedstawSie();

let osoba3 = new Osoba( ' Zenon', 'Kowalski');
osoba.przedstawSie();