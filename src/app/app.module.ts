import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
 import{ FormsModule } from '@angular/forms';
 import { UsernameRequestService} from './username-http/username-request.service'
 import { HttpModule } from '@angular/http'
 import { RouterModule, Routes } from '@angular/router';
 import {RoutingModule} from './routing/routing.module'
//  defining routes



import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorDirective } from './color.directive';
import { AboutComponent } from './about/about.component';

const routes:Routes=[

  {path:"about",component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavbarComponent,
    ColorDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsernameRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
