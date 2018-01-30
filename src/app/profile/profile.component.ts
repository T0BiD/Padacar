import { Component, OnInit } from '@angular/core';
import { Person } from '../classes';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id : number;
  user : Person;


  constructor(private dataService : DataService, private route : ActivatedRoute) { 
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

    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.dataService.users.forEach(user => {
      if(user.id == this.id){
        this.user = user;
      }
    });
    console.log(this.user);
  }

}
