/* Pieni ES6-esimerkki jossa on käytetty joitakin ES6:n piirteitä*/
class OsakeKurssiGeneraattori {

    //konstruktorissa tietojäsenille alkuarvot
    constructor(osake) {
        this.osake = osake;
    }
    //metodi
    generoi() {
        /* huomaa että kun käytämme arrow-syntaksia,
        this-viittaus viittaa OsakeKurssiGeneraattori -olioon,
        koska arrow-funktio ei luo omaa this-viittausta.
        console.log ei myöskään luo omaa this-viittausta*/
        setInterval(() => {
            console.log('Osakkeen ' + this.osake +
                ' hinta on ' + (2 + Math.random()));
        }, 1000);
    }
}
/*ES6:ssa tulee käyttää let tai const avainsanoja muuttujien edessä
  ellei ole mitään erityistä syytä käyttää var-avainsanaa (funktioscope)
  let- ja const -muuuttujille voi luoda scopen helposti lohkosuluilla
*/
{
    let generator = new OsakeKurssiGeneraattori('Solteq');
    generator.generoi();
}
