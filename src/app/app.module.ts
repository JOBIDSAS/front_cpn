import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from '@angular/core';
/**************** library      **********************************/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material-module';
/**************** component      **********************************/
import { AppComponent } from './app.component';
import {TokenInterceptorService} from './security/token-interceptor.service'
import { CountdownModule } from 'ngx-countdown';
import { TestComponent } from './test/test.component';
import {MatIconModule} from '@angular/material/icon';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MapFrenchComponent } from './map-french/map-french.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { baseUrl } from './baseUrl';
import { APP_BASE_HREF } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { LazyLoadImageModule , LAZYLOAD_IMAGE_HOOKS, ScrollHooks} from 'ng-lazyload-image';
import { AvisComponent } from './avis/avis.component';
import { VideoComponent } from './video/video.component'; // <-- import it

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MapFrenchComponent,
    HomeComponent,
    NotFoundComponent,
    AvisComponent,
    VideoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CountdownModule,
    FullCalendarModule,
    NgSelectModule,
    MatIconModule,
    NgxSliderModule,
    LazyLoadImageModule

  ],
  providers: [
    {provide: 'baseUrl', useValue: baseUrl },
    {provide: APP_BASE_HREF, useValue : '/' },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
    },
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
