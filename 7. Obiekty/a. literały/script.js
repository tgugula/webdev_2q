let osoba = {
    imie: 'Adam',
    nazwisko: 'Nowak',

    przedstawSie: function () {
        console.log('Nazywam się' + ' ' + this.imie + ' ' + this.nazwisko);
    },

    zmienImie: function (noweImie) {
        this.imie = noweImie;
    }
};

osoba.przedstawSie();

osoba.imie = 'Jacek';
osoba.przedstawSie();
osoba.zmienImie('Jan');
osoba.przedstawSie();