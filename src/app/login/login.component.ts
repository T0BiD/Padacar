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

  name: string;
  password: string;
  constructor(private data: DataService, private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {

  }

  login() {
    this.data.users.forEach(user => {
      if (user.email == this.name && user.password == this.password) {
        this.data.angemeldeterUser = user;
        this.dialogRef.close();
        return true;
      }
    });
    return false;
  }

}
