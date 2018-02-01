import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Person, Auto } from '../classes';
import { log } from 'util';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private data: DataService, public router: Router) {
    //data.load();
    console.log(this.data.users);
  }

  ngOnInit() {
  }


  public geschlechter: Array<string> = ['männlich', 'weiblich', 'agender', 'bigender', 'demigender', 'Enby', 'genderfluid', 'Ilyagender', 'Sonstige'];
  public vorname: string;
  public nachname: string;
  public email: string;
  public password: string;
  public password2: string;
  public gebDatum: Date;
  public geschlecht: string;
  public automodell: string;
  public autotyp: string;
  public automarke: string;
  public autofarbe: string;

  public fehlermeldung = "";

  public registrieren() {
    console.log(this.nachname, this.vorname, this.email, this.password, this.gebDatum, this.geschlecht, new Auto("", "", "", ""));

    this.fehlermeldung = "";

    if(this.emailOK() && this.passwordOK()){
      console.log("ist ok");
      let newperson = new Person(
        this.vorname,
        this.nachname,
        this.email,
        this.password,
        this.gebDatum,
        this.geschlecht,
        new Auto(
          this.autotyp,
          this.automarke,
          this.automodell,
          this.autofarbe));
      newperson.id = this.data.users.length++;
  
      console.log(newperson);
      this.data.users.push(newperson);
          this.router.navigate(['/home/']);
  
      //this.data.save();
      console.log(this.data.users[this.data.users.length - 1]);
    } else {

    }
   
  }

  emailOK(){
    if(this.email == ""){
      this.fehlermeldung = "Email Adresse ist leer.";
      console.log( "Email Adresse ist leer.");
      return false;
    }
    if(this.email.search('@')<=-1){
      this.fehlermeldung = "Keine gültige Email-Adresse";
      return false;
    }

    let returner = true;
    this.data.users.forEach(user => {
      if(user.email == this.email){
        this.fehlermeldung = "E-Mail schon vorhanden.";
        console.log(this.fehlermeldung);
        returner = false;
      }
    });
    return returner;
  }

  passwordOK(){
    if(this.password==this.password2){
      return true;
    }
    this.fehlermeldung = "Passwörter stimmen nicht überein!";
    console.log(this.fehlermeldung);
    return false;
  }


  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
