export class Person {
    name: string;
    vorname: string;
    email: string;
    password: string;
    geburtsdatum: Date;
    geschlecht: string;
    auto: Auto;
    likes: number;
    dislikes: number;
    //vergangenheit
    gefahreneFahrten: Array<Fahrt>;
    //zukünftige
    angeboteneFahrten: Array<Fahrt>;
    //als mitfahrer
    mitgefahreneFahrten: Array<Fahrt>;

    constructor(name, vorname, email, password, geburtsdatum,geschlecht,auto : Auto){
        this.name = name;
        this.vorname = vorname;
        this.email = email;
        this.password = password;
        this.geburtsdatum = geburtsdatum;
        this.geschlecht = geschlecht;
        this.auto = auto;
        this.dislikes = 0;
        this.likes = 0;

        //Hier die gespeicherten fahrten laden statt leeres array erstellen, nur für testzwecke
        this.angeboteneFahrten = new Array<Fahrt>();
        this.gefahreneFahrten = new Array<Fahrt>();
        this.mitgefahreneFahrten = new Array<Fahrt>();
        
    }


    autoAendern(auto: Auto) {
        this.auto = auto;
    }

    like() {
        this.likes++;
    }
    dislike() {
        this.dislikes++;
    }
    bieteFahrtAn(fahrt: Fahrt) {
        this.angeboteneFahrten.push(fahrt);

    }
    
    updateFahrten() {
        console.log("update fahrten");
        let toRemove: Array<Fahrt> = new Array<Fahrt>();
        this.angeboteneFahrten.forEach(fahrt => {
            console.log(fahrt.datum + " " + new Date() + " " +(fahrt.datum < new Date()));
            if (fahrt.datum < new Date()) {
                this.gefahreneFahrten.push(fahrt);
                toRemove.push(fahrt);
            }
        });

        toRemove.forEach(fahrt => {
            this.angeboteneFahrten.splice(toRemove.indexOf(fahrt));
        });
    }


}

export class Fahrt {
    fahrer: Person;
    //die die mitfahren wollen
    requestedMitfahrer: Array<Person>;
    mitfahrer: Array<Person>;
    maxmitfahrer: number;
    start: string;
    ziel: string;
    gepaeck: boolean;
    datum: Date;
    uhrzeit: string;
    preis: number;
    regelmaessig: string;

    constructor(fahrer){
        this.fahrer = fahrer;
        this.maxmitfahrer = 4;
        this.start = "a";
        this.ziel = "b";
        this.gepaeck = true;
        this.datum = new Date();
        this.uhrzeit = "15:14";
        this.preis = 30;
        this.regelmaessig ="wöchentlich"
        this.mitfahrer = new Array<Person>();
        
    }


    addMitfahrer(mitfahrer: Person) {
        if (this.mitfahrer.length < this.maxmitfahrer) {
            this.mitfahrer.push(mitfahrer);
            return true;
        } else {
            return false;
        }
    }

    removeMitfahrer(mitfahrer: Person) {
        try {
            this.mitfahrer.splice(this.mitfahrer.indexOf(mitfahrer));
            return true;
        } catch (e) {
            return false;
        }
    }

    requestMitfahren(mitfahrer : Person){
        if(this.requestedMitfahrer.indexOf(mitfahrer)<0 && this.mitfahrer.indexOf(mitfahrer)<0){
            this.requestedMitfahrer.push(mitfahrer);
            return true;
        }
        return false;
    }

    requestAnnehmen(mitfahrer : Person){
        if(this.requestedMitfahrer.indexOf(mitfahrer)>-1 && this.mitfahrer.indexOf(mitfahrer)<0){
            if(this.addMitfahrer(mitfahrer)){
                this.requestedMitfahrer.splice(this.requestedMitfahrer.indexOf(mitfahrer));
                mitfahrer.mitgefahreneFahrten.push(this);
                return true;
            }
             
        }
        return false;
    }

}

export class Auto {
    typ: string;
    marke: string;
    modell: string;
    farbe: string;

    constructor(typ, marke,modell, farbe){
        this.typ = typ;
        this.marke = marke;
        this.farbe = modell;
        this.modell = farbe;
    }
}