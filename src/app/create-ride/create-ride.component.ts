import { Component, OnInit } from '@angular/core';
import { Fahrt, Person } from '../classes';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Time } from '@angular/common';


@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent implements OnInit {

  private neueFahrt: Fahrt;
  private person: Person;

  public mitfahrer: number= 1;
  public gepaeckstueck = "false";
  public regel = "Nein";

  public startort: string = "";
  public zielort: string = "";
  public datum: Date = new Date();
  public uhrzeit: string="";
  public preis: number = null;

  public maxmitfahrer: Array<number> = [1, 2, 3, 4, 5, 6]; 
  public gepaeck: Array<String> = ["false", "true"]; 
  public regelmaessig: Array<String> = ["Nein", "wöchentlich", "täglich"];

  constructor(private router: Router, private dataService: DataService) { 
    
    this.person = this.dataService.angemeldeterUser;
    this.neueFahrt = new Fahrt(this.person);
  }

  ngOnInit() {
  }

  private fahrtAnbieten(){

    if(this.dataService.angemeldeterUser != null){
      this.neueFahrt.fahrer = this.dataService.angemeldeterUser;
    }
    this.neueFahrt.start = this.startort;
    this.neueFahrt.ziel = this.zielort;
    this.neueFahrt.datum = this.datum;
    this.neueFahrt.uhrzeit = this.uhrzeit;
    this.neueFahrt.preis = this.preis;
    this.neueFahrt.maxmitfahrer = this.mitfahrer;
    if(this.gepaeckstueck == "true"){
      this.neueFahrt.gepaeck = true;
    }
    else{
      this.neueFahrt.gepaeck = false;
    }
    this.neueFahrt.regelmaessig = this.regel;
    this.neueFahrt.mitfahrer = new Array<Person>();
    this.neueFahrt.requestedMitfahrer = new Array<Person>();
    this.zusätzlicheFahrtenErstellen();

    //Fahrt erstellen
    this.person.bieteFahrtAn(this.neueFahrt);

    //Umleiten auf das eigene Profil
    this.router.navigate(["app/landing-page"]);
  }

  private zusätzlicheFahrtenErstellen(){
    if(this.neueFahrt.regelmaessig == "wöchentlich"){
      
    }
    else if(this.neueFahrt.regelmaessig == "täglich"){

    }
    else{

    }
    //Methode um den "regelmäßig" Parameter auszulesen und ggf. weitere fahreten zu erstellen
  }

}
