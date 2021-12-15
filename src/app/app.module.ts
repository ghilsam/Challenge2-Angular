import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HeroesComponent } from './heroes/heroes.component';

import { AppRoutingModule } from './app-routing.module';
import { BlockComponent } from './block/block.component';





@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent,
    BlockComponent,

  ],
  imports: [
    BrowserModule,
    // FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
