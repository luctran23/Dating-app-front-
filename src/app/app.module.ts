import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GirlsComponent } from './girls/girls.component';
import { GirlService } from './girl.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GirlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GirlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
