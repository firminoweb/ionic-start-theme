import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// ReactiveForms
import { ReactiveFormsModule } from '@angular/forms';
import { Plugins } from '@capacitor/core';

// NgCharts
import { NgChartsModule } from 'ng2-charts';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Plugin } from '@awesome-cordova-plugins/core';
const { Http } = Plugins;


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
