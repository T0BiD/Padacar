import { Component, OnInit } from '@angular/core';
import { Fahrt, Person } from '../classes';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Time } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent implements OnInit {

  private neueFahrt : Fahrt;
  private person: Person;

  public mitfahrer: number = 1;
  public gepaeckstueck = "false";
  public regel = "Nein";

  public startort: string = "";
  public zielort: string = "";
  public datum: Date = new Date();
  public uhrzeit: string = "";
  public preis: number = null;

  public maxmitfahrer: Array<number> = [1, 2, 3, 4, 5, 6];
  public gepaeck: Array<String> = ["false", "true"];
  public regelmaessig: Array<String> = ["Nein", "wöchentlich", "täglich"];

  public fehlermeldung = "";

  constructor(private router: Router, private dataService: DataService, private dialog : MatDialog) {

  }

  ngOnInit() {
  }

  private fahrtAnbieten() {



    if (this.dataService.angemeldeterUser != null) {
      this.fehlermeldung = "";
      let neueFahrt = new Fahrt(this.dataService.angemeldeterUser);
      neueFahrt.fahrer = this.dataService.angemeldeterUser;
      this.person = this.dataService.angemeldeterUser;
      neueFahrt = new Fahrt(this.person);
      neueFahrt.id = this.dataService.angeboteneFahrten.length + this.dataService.vergangenenFahrten.length+1;
      neueFahrt.start = this.startort;
      neueFahrt.ziel = this.zielort;
      neueFahrt.datum = this.datum;
      neueFahrt.uhrzeit = this.uhrzeit;
      neueFahrt.preis = this.preis;
      neueFahrt.maxmitfahrer = this.mitfahrer;
      if (this.gepaeckstueck == "true") {
        neueFahrt.gepaeck = true;
      }
      else {
        neueFahrt.gepaeck = false;
      }
      neueFahrt.regelmaessig = this.regel;
      neueFahrt.mitfahrer = new Array<Person>();
      neueFahrt.requestedMitfahrer = new Array<Person>();

      let tempdate = new Date(neueFahrt.datum);
      tempdate.setHours((Number)(this.uhrzeit.substring(0,2)), (Number)(this.uhrzeit.substring(3,5)));
      neueFahrt.datum = tempdate;


      if(new Date(neueFahrt.datum)>=new Date()){
        this.neueFahrt =  neueFahrt;
        console.log(this.neueFahrt);
        this.person.bieteFahrtAn(neueFahrt);
        this.person.updateFahrten();
        this.dataService.updateAngeboteneFahrten();
        console.info(this.person.angeboteneFahrten);
        this.zusätzlicheFahrtenErstellen();
        this.router.navigate(['/fahrt/'+neueFahrt.id]);
      } else {
        console.log("Kein Datum aus der Vergangenheit.");
        this.fehlermeldung = "Kein Datum aus der Vergangenheit.";
      }

    } else {
      console.log("keiner angemeldet");
      this.login();
    }



    //this.zusätzlicheFahrtenErstellen();

    //Umleiten auf das eigene Profil
    //this.router.navigate(["app/landing-page"]);
  }

  login(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(this.dataService.angemeldeterUser){
        this.fahrtAnbieten();
      }

    });
  }

  //Methode um den "regelmäßig" Parameter auszulesen und ggf. weitere fahreten zu erstellen
  private zusätzlicheFahrtenErstellen() {
    if (this.neueFahrt.regelmaessig == "wöchentlich") {
      for (let i = 0; i <= 52; i++) {
        let nF = new Fahrt(this.dataService.angemeldeterUser);
        nF.datum = new Date(this.neueFahrt.datum.valueOf()+7*(1+i)*1000*60*60*24);
        nF.gepaeck = this.neueFahrt.gepaeck;
        nF.id = this.dataService.angeboteneFahrten.length + this.dataService.vergangenenFahrten.length+2+i;
        nF.maxmitfahrer = this.neueFahrt.maxmitfahrer;
        nF.preis = this.neueFahrt.preis;
        nF.regelmaessig = this.neueFahrt.regelmaessig;
        nF.start = this.neueFahrt.start;
        nF.ziel = this.neueFahrt.ziel;
        nF.uhrzeit = this.neueFahrt.uhrzeit;

        this.person.bieteFahrtAn(nF);
        console.log("Datum:" + nF.datum);
      }
    }
    else if (this.neueFahrt.regelmaessig == "täglich") {
      for (var i: number = 0; i <= 365; i++) {
        let nF = new Fahrt(this.dataService.angemeldeterUser);
        nF.datum = new Date(this.neueFahrt.datum.valueOf()+(1+i)*1000*60*60*24);
        
        nF.gepaeck = this.neueFahrt.gepaeck;
        nF.id = this.dataService.angeboteneFahrten.length + this.dataService.vergangenenFahrten.length+2+i;
        nF.maxmitfahrer = this.neueFahrt.maxmitfahrer;
        nF.preis = this.neueFahrt.preis;
        nF.regelmaessig = this.neueFahrt.regelmaessig;
        nF.start = this.neueFahrt.start;
        nF.ziel = this.neueFahrt.ziel;
        nF.uhrzeit = this.neueFahrt.uhrzeit;

        this.person.bieteFahrtAn(nF);
        console.log("Datum:" + this.neueFahrt.datum);
      }
    }
    else {
      console.info("Keine regelmäßigen Fahrten erstellt");
    }
    this.dataService.updateAngeboteneFahrten();
  }

}
