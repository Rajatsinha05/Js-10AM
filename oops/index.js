
class Human {
    #dimag;
    constructor(hath, pair, muh, kan, dimag, name) {
        this.hath = hath;
        this.pair = pair;
        this.muh = muh;
        this.kan = kan;
        this.#dimag = dimag;
        this.name = name;

    }

    kyabolSktaHai() {

        console.log(`${this.name} bol Skta Hai`);

    }
    kyapadhSktaHai() {
        console.log(`${this.name} padh Skta Hai`);
    }
    kyachalSktaHai() {
        console.log(`${this.name} chal Skta hai`);

    }

    kyaKhasaktaHai() {

        console.log(`${this.name} kha skta hai`);
    }


    setDimag(dimag) {

        if (dimag < 0) {
            throw new Error("Dimag must be  greater than zero ")
        }

        this.#dimag = dimag;
    }


    getDimag() {

        return this.#dimag;
    }

}



class superman extends Human {

    constructor(hath, pair, muh, kan, dimag, name, ankh, nak, fly, fight, run) {
        super(hath, pair, muh, kan, dimag, name);
        this.nak = nak;
        this.ankh = ankh;
        this.fly = fly;
        this.fight = fight;
        this.run = run;
    }

    isFly() {

        if (this.fly == true) {
            console.log(`${this.name} udh sakta hai`);
        }
        else {
            console.log(`${this.name} run kar skta hai `);
        }

    }


    kyabolSktaHai() {
        console.log("super man");
    }

}



class Ironman extends superman {
    constructor(hath, pair, muh, kan, dimag, name, ankh, nak, fly, fight, run) {
        super(hath, pair, muh, kan, dimag, name, ankh, nak, fly, fight, run);

    }


    kyaFightkarSktahai() {
        if (this.fight == true) {

            console.log(`${this.name} fight kar skta hai`);
        }
        else {
            console.log(`${this.name} run kar skta hai `);
        }
    }


}




let om = new Human(2, 2, 1, 2, 1, "om")

let raj = new superman(2, 2, 1, 2, 1, "raj", 2, 1, false, false, true)
om.kyabolSktaHai()
raj.kyabolSktaHai()
