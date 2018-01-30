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
    let p1 = new Person("Maier","Hans","hansmaier@mail.com","1234",new Date(),"trans",new Auto("","","",""));
    p1.id = 0;
    this.users.push(p1);
    let p2 = new Person("ads","Hans","ads","1234",new Date(),"trans",new Auto("","","",""));
    p2.id = 1;
    this.users.push(p2);
    let p3 = new Person("admin","admin","admin","admin",new Date(),"admin",new Auto("","","",""));
    p3.id = 2;
    this.users.push(p3);
  

    let f = new Fahrt(
      this.users[0]);
      this.angeboteneFahrten.push(f);
  }

  updateAngeboteneFahrten(){
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
