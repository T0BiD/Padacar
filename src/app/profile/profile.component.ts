import { Component, OnInit } from '@angular/core';
import { Person } from '../classes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : Person;


  constructor(user : Person) { 
    this.user = user;
    
  }

  ngOnInit() {
  }

}
