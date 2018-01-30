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

 fahrten: Array<Fahrt> = this.data.angeboteneFahrten;

  constructor(private data: DataService, private router: Router) {
    console.log(this.fahrten);
    this.fahrten[0].fahrer.like();
    this.fahrten[0].fahrer.like();
    this.fahrten[0].fahrer.like();
    this.fahrten[0].fahrer.dislike();
    console.log(this.fahrten[0].fahrer.geburtsdatum);
    console.log(new Date());
   }

  ngOnInit() {
  }

  onDrive(index){
    console.log(this.fahrten[index]);
       this.router.navigate(['/fahrt/' + this.fahrten[index].id]);
  }

  onSearch(){
    console.log(this.gepaeck);
    console.log(this.startort);
    console.log(this.zielort);
    let zeit = "dsaf";
    console.log(this.time);
    console.log(zeit);

    // this.time = zeit.substring(16, 21);
    // console.log(this.time.substring(16, 21));

    this.isSearch = true;
    let alleFahrten = this.data.angeboteneFahrten;
    for(let f of alleFahrten){
      // if(f.start == )
    }

  }

}
