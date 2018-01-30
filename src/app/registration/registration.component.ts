import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Person, Auto } from '../classes';
import { log } from 'util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private data: DataService) {
    data.load();
    console.log(this.data.users);
  }

  ngOnInit() {
  }


  public geschlechter: Array<String> = ['männlich', 'weiblich', 'agender', 'bigender', 'demigender', 'Enby', 'genderfluid', 'Ilyagender', 'Sonstige'];
  public vorname: String;
  public nachname: String;
  public email: String;
  public password: String;
  public password2: String;
  public gebDatum: Date;
  public geschlecht: String;
  public automodell: String;
  public autotyp: String;
  public automarke: String;
  public autofarbe: String;

  public registrieren() {
    console.log(this.nachname, this.vorname, this.email, this.password, this.gebDatum, this.geschlecht, new Auto("", "", "", ""));

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

    this.data.users.push(newperson);


    this.data.save();
    console.log(this.data.users[this.data.users.length - 1]);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
