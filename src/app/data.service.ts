import { Injectable } from '@angular/core';
import { Auto, Person, Fahrt } from './classes';



@Injectable()
export class DataService {

  users : Array<Person>;
  angeboteneFahrten : Array<Fahrt>;
  angemeldeterUser : Person;


  constructor() {
    this.angemeldeterUser = null;
    this.users = new Array<Person>();
    this.angeboteneFahrten = new Array<Fahrt>();

    let p1 = new Person("Maier","Hans","hansmaier@mail.com","1234",new Date("01.01.1990"),"trans",new Auto("Kombi","VW","Passat","Grün"));
    p1.id = 0;
    p1.likes = 4; p1.dislike();
    let f1 = new Fahrt(p1);
    f1.start = "paderborn";f1.ziel = "München";f1.datum=new Date("02.12.2018");f1.id = this.angeboteneFahrten.length++;f1.maxmitfahrer = 4;
    f1.uhrzeit = "12:20"; f1.gepaeck=true;
    p1.bieteFahrtAn(f1);
    this.users.push(p1);
    this.updateAngeboteneFahrten();

    let p2 = new Person("Hans","Peter","peter@mail.com","1234",new Date("01.01.1995"),"weiblich",new Auto("Kleinwagen","Mini","Cooper S","Rosa"));
    p2.id = 1;
    p2.likes = 2; p2.dislike();
    let f2 = new Fahrt(p2);
    f2.start = "Berlin";f2.ziel = "München";f2.datum=new Date("01.22.2018");f2.id = this.angeboteneFahrten.length++;f2.maxmitfahrer = 4;
    f2.uhrzeit = "12:20"; f2.gepaeck=true;
    p2.bieteFahrtAn(f2);
    this.users.push(p2);
    this.updateAngeboteneFahrten();

    let p3 = new Person("admin","admin","admin","admin",new Date("01.01.1993"),"admin",new Auto("Limo","Limomarke","",""));
    p3.id = 2;
    p3.like();p3.dislikes = 10;
    let f3 = new Fahrt(p3);
    f3.start = "paderborn";f3.ziel = "Berlin";f3.datum=new Date("02.02.2018");f3.id = this.angeboteneFahrten.length++;f3.maxmitfahrer = 4;
    f3.uhrzeit = "12:20"; f3.gepaeck=true;
    p3.bieteFahrtAn(f3);
    this.users.push(p3);
    this.updateAngeboteneFahrten();

  }

  updateAngeboteneFahrten(){
    this.users.forEach(user => {
      user.updateFahrten();
    });

    let newAngFahrt = new Array<Fahrt>();
    this.users.forEach(user => {
      user.angeboteneFahrten.forEach(fahrt => {
        newAngFahrt.push(fahrt);
      });
    });
    this.angeboteneFahrten = newAngFahrt;
    return this.angeboteneFahrten;
  }


  save(){
    console.log("start save");
    localStorage.setItem("users",JSON.stringify(this.users));
    console.log("gesaved");
  }
  load(){
    console.log("start load");
    this.users = JSON.parse(localStorage.getItem("users"));
    console.table(this.users);
  }


}
