import { Injectable } from '@angular/core';
import { Auto, Person, Fahrt } from './classes';



@Injectable()
export class DataService {

  users : Array<Person>;
  angeboteneFahrten : Array<Fahrt>;
  vergangenenFahrten : Array<Fahrt>;
  angemeldeterUser : Person;


  constructor() {
    this.angemeldeterUser = null;
    this.users = new Array<Person>();
    this.angeboteneFahrten = new Array<Fahrt>();
    this.vergangenenFahrten = new Array<Fahrt>();

    let p1 = new Person("Maier","Hans","hansmaier@mail.com","1234",new Date("01.01.1990"),"männlich",new Auto("Kombi","VW","Passat","Grün"));
    p1.id = 0;
    p1.likes = 4;p1.dislikes++;
    let f1 = new Fahrt(p1);
    f1.start = "Paderborn";f1.ziel = "München";f1.datum=new Date("02.12.2018");f1.id = 1;f1.maxmitfahrer = 4;
    f1.uhrzeit = "12:20"; f1.gepaeck=true;
    p1.bieteFahrtAn(f1);
    this.users.push(p1);

    let p2 = new Person("Hans","Peter","peter@mail.com","1234",new Date("01.01.1995"),"weiblich",new Auto("Kleinwagen","Mini","Cooper S","Rosa"));
    p2.id = 1;
    p2.likes = 2; p2.dislikes++;
    let f2 = new Fahrt(p2);
    f2.start = "Berlin";f2.ziel = "München";f2.datum=new Date("01.01.2017");f2.id = 2;f2.maxmitfahrer = 4;
    f2.uhrzeit = "12:20"; f2.gepaeck=true;
    p2.bieteFahrtAn(f2);
    this.users.push(p2);

    let p3 = new Person("admin","admin","admin","admin",new Date("01.01.1993"),"Sonstige",new Auto("Limo","Limomarke","",""));
    p3.id = 2;
    p3.likes++;p3.dislikes = 10;
    let f3 = new Fahrt(p3);
    f3.start = "Paderborn";f3.ziel = "Berlin";f3.datum=new Date("01.02.2018");f3.id = 3;f3.maxmitfahrer = 4;
    f3.uhrzeit = "12:20"; f3.gepaeck=true;
    p3.bieteFahrtAn(f3);
    f2.addMitfahrer(p3);
    //wat
    p3.mitgefahreneFahrten.push(f2);
    this.users.push(p3);



    let p4 = new Person("Reck","Udo","uda@reck.de","getrecked123",new Date("05.24.1967"),"männlich",new Auto("Supersportwagen","Audi","RS8","weiß"));
    let p5 = new Person("Yilmaz","Adi","Adi-Yilmaz@web.de","erdogan",new Date("01.02.1990"),"männlich",new Auto("Kleinwagen","Opel","Corsa","gelb"));
    let p6 = new Person("Brugger","Hazel","hazelbrugger@comdey.de","NichtLustig,einfachnurböse",new Date("05.03.1953"),"weiblich",new Auto("Kombi","Ford","Focus","grau"));
    let p7 = new Person("Feuerstein","Fred","fred.feuerstein@oldbutgold.com","freddy",new Date("08.04.1943"),"agender",new Auto("Oldtimer","Mercedes","W 116","gold"));
    let p8 = new Person("Wick","John","john@wick.com","fk235k<ds§UIga4uigBHui§I/§ZUFUIA",new Date("12.05.1997"),"bigender",new Auto("Sportwagen","Lexus","RC F","grün"));
    let p9 = new Person("Pauli","David Florian","dfp@dfp.de","12345679",new Date("06.17.1969"),"weiblich",new Auto("SUV","BMW","X5","Regenbogenfarben"));
    let p10 = new Person("van Pader","Uli","UliVanPader@paderborn.de","Paderboring",new Date("07.13.1988"),"männlich",new Auto("","","",""));
    let p11 = new Person("Praktikant","Still","StillPraktikant@nojob.de","prakitkant",new Date("08.25.1974"),"männlich",new Auto("","","",""));
    let p12 = new Person("Beutlin","Bilbo","Bilbo@auenland.de","Meisterdieb123",new Date("09.22.1983"),"männlich",new Auto("Kombi","Audi","A3","lila"));
    p4.id=4; p4.likes=100; p4.dislikes=0;
    p5.id=5; p5.likes=14; p5.dislikes=2;
    p6.id=6; p6.likes=111; p6.dislikes=22;
    p7.id=7; p7.likes=2; p7.dislikes=1;
    p8.id=8; p8.likes=6; p8.dislikes=4;
    p9.id=9; p9.likes=3; p9.dislikes=5;
    p10.id=10;
    p11.id=11;
    p12.id=12; p12.likes=185; p12.dislikes=7;

    let f4 = new Fahrt(p4);
    let f5 = new Fahrt(p5);
    let f6 = new Fahrt(p6);
    let f7 = new Fahrt(p7);
    let f8 = new Fahrt(p8);
    let f9 = new Fahrt(p12);
    let f10 = new Fahrt(p12);

    f4.start = "Paderborn";
    f4.ziel = "Stuttgart";
    f4.datum=new Date("02.01.2018");
    f4.id = 4;
    f4.maxmitfahrer = 1;
    f4.uhrzeit = "13:30";
    f4.gepaeck=true;

    f5.start = "Augsburg";
    f5.ziel = "Stuttgart";
    f5.datum=new Date("01.02.2018");
    f5.id = 5;
    f5.maxmitfahrer = 2;
    f5.uhrzeit = "14:00";
    f5.gepaeck=false;

    f6.start = "Paderborn";
    f6.ziel = "Augsburg";
    f6.datum=new Date("02.11.2018");
    f6.id = 6;
    f6.maxmitfahrer = 3;
    f6.uhrzeit = "20:00";
    f6.gepaeck=true;

    f7.start = "Dresden";
    f7.ziel = "Paderborn";
    f7.datum=new Date("02.10.2018");
    f7.id = 7;
    f7.maxmitfahrer = 3;
    f7.uhrzeit = "15:00";
    f7.gepaeck=true;

    f8.start = "Hamburg";
    f8.ziel = "München";
    f8.datum=new Date("02.10.2018");
    f8.id = 8;
    f8.maxmitfahrer = 1;
    f8.uhrzeit = "17:00";
    f8.gepaeck=false;

    f9.start = "Paderborn";
    f9.ziel = "Auenland";
    f9.datum=new Date("09.22.2017");
    f9.id = 9;
    f9.maxmitfahrer = 3;
    f9.uhrzeit = "14:00"; f9.gepaeck=true;

    f10.start = "Auenland";
    f10.ziel = "Hamburg";
    f10.datum=new Date("03.03.2018");
    f10.id = 10;
    f10.maxmitfahrer = 3;
    f10.uhrzeit = "08:30"; f10.gepaeck=true;

    p4.bieteFahrtAn(f4);
    p5.bieteFahrtAn(f5);
    p6.bieteFahrtAn(f6);
    p7.bieteFahrtAn(f7);
    p8.bieteFahrtAn(f8);
    p12.bieteFahrtAn(f9);
    p12.bieteFahrtAn(f10);
    

    this.users.push(p4);
    this.users.push(p5);
    this.users.push(p6);
    this.users.push(p7);
    this.users.push(p8);
    this.users.push(p9);
    this.users.push(p10);
    this.users.push(p11);
    this.users.push(p12);

    this.updateAngeboteneFahrten();
    console.log(this.angeboteneFahrten);
    console.log(this.vergangenenFahrten);
}


  updateAngeboteneFahrten(){
    this.users.forEach(user => {
      user.updateFahrten();
    });

    let newAngFahrt = new Array<Fahrt>();
    let newVergFahrt = new Array<Fahrt>();
    this.users.forEach(user => {
      user.angeboteneFahrten.forEach(fahrt => {
        newAngFahrt.push(fahrt);
      });
      user.gefahreneFahrten.forEach(fahrt => {
        newVergFahrt.push(fahrt);
      });
    });

    this.vergangenenFahrten = newVergFahrt;
    this.angeboteneFahrten = newAngFahrt;
    return this.angeboteneFahrten;
  }


  save(){
    console.log("start save");
    //localStorage.setItem("users",JSON.stringify(this.users));
    console.log("gesaved");
  }
  load(){
    console.log("start load");
    let loadusers = JSON.parse(localStorage.getItem("users"));

    if(loadusers){
      this.users = loadusers;
    }

    console.table(this.users);
  }


}
