import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Import of the angular-material angular module
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    MatTabsModule,

    // Import of the angular-material angular module
    AngularMaterialModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
