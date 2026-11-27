/*
  HARJOITUS 3: KOOSTAMINEN
  Tee ensin itse. Vertaa vasta lopuksi malliin.

  TEHTÄVÄ
  Rakenna ShoppingCart-luokka, joka sisältää tuotteita taulukossa.

  - add(product)
  - remove(id)
  - getter total
  - clear()
  - älä tee Product-periytymishierarkiaa ilman tarvetta

  HAASTE
  Lisää discount-strategy erillisenä funktiona/oliona
  ja syötä se cartille constructorissa.
*/


class ShoppingCart {
    
    constructor () {
        this.tuotteet = [];
    }

    add(tuote) {
        this.tuotteet.push(tuote);
    }

    remove(id) {
        this.tuotteet = this.tuotteet.filter((tuote) => tuote.id !== id);
    }

    get total (){
        return this.tuotteet.reduce((summa, tuote) => summa + tuote.hinta, 0);
    }

    clear(){
        this.tuotteet = [];
    }
}

const kori = new ShoppingCart();

kori.add({id:1, nimi: "Maito", hinta: 1.5 });
kori.add({id:2, nimi: "Leipä", hinta: 2.5});

console.log(kori.tuotteet);


console.log(kori.total);      
kori.remove(1);
console.log(kori.total);       
kori.clear();
console.log(kori.tuotteet);    
console.log(kori.total);