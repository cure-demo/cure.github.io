import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatToolbarModule, MatMenuModule, MatIconModule,
         MatProgressSpinnerModule, MatGridListModule, MatRadioModule, MatSelectModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    MatRadioModule,
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    NgxMaterialTimepickerModule,
    MatSortModule
  ],
  exports: [
    MatPaginatorModule,
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    NgxMaterialTimepickerModule,
    MatSortModule
  ],
})
export class CustomMaterialModule { }