import { Component } from '@angular/core';
import { DataService } from './data.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  password: string;
  name: string;
  constructor(private data: DataService, public dialog: MatDialog, private router: Router) {

  }
  login(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  gotoProfile() {
    let index = this.data.angemeldeterUser.id;
    this.router.navigate(['/profile/' + index]);
  }

  logout() {
    this.data.angemeldeterUser = null;
    this.router.navigate(['/home/']);

  }

  register() {
    this.router.navigate(['/registration/']);
  }

  home() {
    this.router.navigate(['/home/']);
  }
  
 

}

