import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
 import{ FormsModule } from '@angular/forms';
 import { UsernameRequestService} from './username-http/username-request.service'
 import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsernameRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
