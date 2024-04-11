import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { FooderComponent } from './components/fooder/fooder.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BiografiaComponent,
    FooderComponent,
    HistoriaComponent,
    NavbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
