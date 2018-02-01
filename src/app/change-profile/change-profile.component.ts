import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Person, Auto } from '../classes';
import { log } from 'util';
import { Router, ActivatedRoute} from '@angular/router/';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {

  constructor(private data: DataService, public router: Router, private route: ActivatedRoute) {
    //data.load();


    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.data.users.forEach(user => {
      if(user.id == this.id){
        this.user = user;
      }
    });
    console.log(this.user);
    this.vorname = this.user.vorname;
    this.nachname = this.user.name;
    this.email = this.user.email;
    this.password = "";
    this.password2 = "";
    this.geschlecht = this.user.geschlecht;
    this.automodell = this.user.auto.modell;
    this.autotyp = this.user.auto.typ;
    this.automarke = this.user.auto.marke;
    this.autofarbe = this.user.auto.farbe;
  }

  ngOnInit() {
  }


  public geschlechter: Array<string> = ['männlich', 'weiblich', 'agender', 'bigender', 'demigender', 'Enby', 'genderfluid', 'Ilyagender', 'Sonstige'];
  public vorname: string;
  public nachname: string;
  public email: string;
  public password: string;
  public password2: string;
  public geschlecht: string;
  public automodell: string;
  public autotyp: string;
  public automarke: string;
  public autofarbe: string;

  public user: Person;
  public fehlermeldung = "";
  public id = 0;

  public change() {
    console.log(this.nachname, this.vorname, this.email, this.password, this.geschlecht, new Auto("", "", "", ""));

    this.fehlermeldung = "";

    if(this.emailOK() && this.passwordOK()){
      console.log("ist ok");

      this.user.vorname = this.vorname;
      this.user.name= this.nachname;
      this.user.email = this.email;
      this.user.password = this.password ;

      this.user.geschlecht = this.geschlecht;
      this.user.auto.modell = this.automodell;
      this.user.auto.typ = this.autotyp;
      this.user.auto.marke = this.automarke;
      this.user.auto.farbe = this.autofarbe;

      console.log(this.id);
        this.router.navigate(['/profile/'+this.id]);


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
      if(user.email == this.email ){
        if(user.id != this.id){
          this.fehlermeldung = "E-Mail schon vorhanden.";
          console.log(this.fehlermeldung);
          returner = false;
        }

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
  abbrechen(){
    console.log(this.id);
      this.router.navigate(['/profile/'+this.id]);
  }
}
