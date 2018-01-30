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

  date = new FormControl(new Date());
 serializedDate = new FormControl((new Date()).toISOString());

 gepaeck: string = "nein";
 startort: string;
 zielort: string;
 time: string;


 isSearch: boolean = false;

 fahrten: Array<Fahrt> = this.data.angeboteneFahrten;

  constructor(private data: DataService, private router: Router) {
    console.log(this.fahrten);
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
