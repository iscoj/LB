import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatTableModule,
  MatExpansionModule
  
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  exports: [MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
})
export class MaterialModule { }
