import { Component, OnInit } from '@angular/core';
import { Person } from '../classes';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : Person;


  constructor(private dataService : DataService) { 
    if(this.dataService.angemeldeterUser){
      this.user = this.dataService.angemeldeterUser;
      console.log("pre update:");
      console.table(this.user.angeboteneFahrten);
      this.user.updateFahrten();
      console.log("angeboten:");
      console.table(this.user.angeboteneFahrten);
      console.log("gefahren:");
      console.table(this.user.gefahreneFahrten);
     
    } 
    
    
    
  }

  ngOnInit() {
  }

}
