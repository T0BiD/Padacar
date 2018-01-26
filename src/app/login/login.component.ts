import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private data: DataService, private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { 
    this.email = "a";
    this.password = "b";
  }

  ngOnInit() {

  }

  login() {
    this.data.users.forEach(user => {
      console.log(user.name);
      
      if (user.email == this.email && user.password == this.password) {
        console.log("passt");
        this.data.angemeldeterUser = user;
        this.dialogRef.close();
        
        return true;
      } else {
        console.log("user:");
        console.log(user.email, user.password);
        console.log("anmelder:");
        console.log(this.email, this.password);
      }
    });
    console.log("flasch")
    return false;
    
  }

}
