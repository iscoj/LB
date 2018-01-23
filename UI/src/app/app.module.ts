import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LendComponent } from './lend/lend.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from './material.module';
import { LendLendComponent } from './lend/lend/lend.component';
import { BorrowComponent } from './lend/borrow/borrow.component';


import { GlobalService } from './services/global.service';


@NgModule({
  declarations: [
    AppComponent,
    LendComponent,
    IndexComponent,
    LendLendComponent,
    BorrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ GlobalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
