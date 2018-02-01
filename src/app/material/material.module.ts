import { NgModule } from '@angular/core';
import { MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
      MatButtonModule,
    MatCardModule,
    MatMenuModule,
  MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
   exports: [
     MatToolbarModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSelectModule,
     MatButtonModule,
     MatCardModule,
     MatIconModule,
     MatMenuModule 
   ]
})
export class MaterialModule { }
