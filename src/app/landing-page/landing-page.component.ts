import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService, private dialog : MatDialog) { }

  ngOnInit() {
  }

  suchen() {
    console.log("suche");
    this.router.navigate(['/suche']);
  }

  anbieten() {
    if (this.dataService.angemeldeterUser) {


      console.log("anbieten"); //link zur anbietenseite muss noch hinzugefügt werden
      this.router.navigate(['/createride']);
    } else {
      this.login();
    }
  }

  login(): void {

    let dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/createride']);
      console.log('The dialog was closed');
    });
  }
}
