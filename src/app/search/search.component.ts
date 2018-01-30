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
    let alleFahrten = this.data.angeboteneFahrten;
    for(let f of alleFahrten){
      console.log(this.datum);
      console.log(f.datum);

console.log(new Date(this.datum));

      if( (f.start == this.startort || f.ziel == this.zielort) && f.datum >= new Date(this.datum)){
        this.fahrten.push(f);
      }


    }
    console.log(this.fahrten);
this.isSearch = true;
  }

}
