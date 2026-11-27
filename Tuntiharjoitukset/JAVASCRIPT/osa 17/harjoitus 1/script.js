


class Student {

    #pisteet;

    constructor(nimi, pisteet){
        this.nimi = nimi;

        if (pisteet < 0) {
            throw new Error("Pisteet eivät voi olla negatiivisia.");
        }

        this.#pisteet = pisteet;
        this.aktiivisuus = true;
    }

    addPoints(amount) {

        if(amount < 0) {
            throw new Error("Pisteet eivät voi olla negatiivisia.");
        }

        this.#pisteet += amount;
    }


    greet() {
        console.log(`Hei, minun nimeni on ${this.nimi}!`)
    }

    get pisteet() {
        return this.#pisteet;
    }

    get grade() {
        if (this.#pisteet >= 50) {
            return "Hyväksytty!";
        }

        return "Hylätty.";
    }
    
}

const samuli = new Student("Samuli", 40);
const heta = new Student("Heta", 30);
const aamos = new Student("Aamos", 90);

samuli.addPoints(15);

console.log(samuli.grade);

samuli.greet();
heta.greet();
aamos.greet();
