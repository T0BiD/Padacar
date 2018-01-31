import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { Auto, Person, Fahrt } from '../classes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


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

 public geschlechter: Array<String> = ['männlich', 'weiblich', 'agender', 'bigender', 'demigender', 'Enby', 'genderfluid', 'Ilyagender', 'Sonstige'];
 public maxmitfahrer: Array<number> = [1, 2, 3, 4, 5, 6];
 public gepaeck: Array<String> = ["false", "true"];
 public regelmaessig: Array<String> = ["Nein", "wöchentlich", "täglich"];

public fehlermeldung = "";
 isSearch: boolean = false;

 fahrten: Array<Fahrt> = [];

  constructor(private data: DataService, private router: Router) {


   }

  ngOnInit() {
  }

  onDrive(index){
    console.log(this.fahrten[index]);
       this.router.navigate(['/fahrt/' + this.fahrten[index].id]);
  }

  onSearch(){

this.fahrten = [];
this.fehlermeldung = "";

    let alleFahrten = this.data.angeboteneFahrten;
    let fahrtengenau = [];

    console.log(alleFahrten);
    for(let f of alleFahrten){


      if( (f.start.toLowerCase() == this.startort.toLowerCase()
      && f.ziel.toLowerCase() == this.zielort.toLowerCase())
      && f.datum >= new Date(this.datum)){
        fahrtengenau.push(f);
      }


    }

    if(fahrtengenau.length==0){
      for(let f of alleFahrten){


        if( (f.start.toLowerCase() == this.startort.toLowerCase()
        || f.ziel.toLowerCase() == this.zielort.toLowerCase())
        && f.datum >= new Date(this.datum)){
          this.fahrten.push(f);
        }
      }
    } else {
      this.fahrten = fahrtengenau;
    }
    console.log(this.fahrten);
    this.isSearch = true;
    if(this.fahrten.length <= 0)
    {
      this.fehlermeldung = "Es wurden keine Fahrten gefunden!";
      this.isSearch = false;
    }

  }

}
