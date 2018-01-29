import { NgModule } from '@angular/core';
import { MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
      MatButtonModule,
    MatCardModule,
  MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
   exports: [
     MatToolbarModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSelectModule,
     MatButtonModule,
     MatCardModule,
     MatIconModule
   ]
})
export class MaterialModule { }
