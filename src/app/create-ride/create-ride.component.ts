import { Component, OnInit } from '@angular/core';
import { Fahrt, Person } from '../classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent implements OnInit {

  private neueFahrt: Fahrt;

  public maxmitfahrer: Array<number> = [1, 2, 3, 4, 5, 6]; 
  public gepaeck: Array<String> = ["false", "true"]; 
  public regelmaessig: Array<String> = ["Nein", "wöchentlich", "täglich"];

  constructor(private router: Router) { 
    this.neueFahrt = new Fahrt;
  }

  ngOnInit() {
  }

  private fahrtAnbieten(){
    //Über person eine neue Fahrt anbieten
  }

  private zusätzlicheFahrtenErstellen(){
    //Methode um den "regelmäßig" Parameter auszulesen und ggf. weitere fahreten zu erstellen
  }

}
