import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WindowRefService } from './../services/cpn/window-ref.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpnRoutingModule } from './cpn-routing.module';
import { CpnComponent } from './cpn.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { SubventionComponent } from './subvention/subvention.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CollectiviteComponent } from './collectivite/collectivite.component';
import { ActualiteComponent } from './actualite/actualite.component';
import {AgenceComponent  } from './agence/agence.component';
import { HometpepmeComponent } from './hometpepme/hometpepme.component';
import { NouvelleaquantineComponent } from './regions/nouvelleaquantine/nouvelleaquantine.component';
import { CollectiviteterritorialemartiniqueComponent } from './regions/collectiviteterritorialemartinique/collectiviteterritorialemartinique.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { CalandarComponent } from './calandar/calandar.component';
import { MapFrenchRegionComponent } from './map-french-region/map-french-region.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotreSuccesComponent } from './notre-succes/notre-succes.component';
import { PassOublierComponent } from './pass-oublier/pass-oublier.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ProfileComponent } from './profile/profile.component';
import { LazyLoadImageModule , LAZYLOAD_IMAGE_HOOKS, ScrollHooks} from 'ng-lazyload-image'; // <-- import it
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    CpnComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    ConnexionComponent,
    ContactComponent,
    SubventionComponent,
    InscriptionComponent,
    CollectiviteComponent,
    ActualiteComponent,
    NouvelleaquantineComponent,
    CollectiviteterritorialemartiniqueComponent,
    AgendaComponent,
    CalandarComponent,
    MapFrenchRegionComponent,
    SideBarComponent,
    HometpepmeComponent,
    AgenceComponent,
    NotreSuccesComponent,
    PassOublierComponent,
    ChangePassComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CpnRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgxDropzoneModule
  ],

  providers: [    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }  ],

})
export class CpnModule { }
