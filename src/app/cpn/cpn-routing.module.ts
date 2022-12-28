import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { CpnComponent } from './cpn.component';
import { ContactComponent } from './contact/contact.component';
import { SubventionComponent } from './subvention/subvention.component';
import { ProfileComponent } from './profile/profile.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { CalandarComponent } from './calandar/calandar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CollectiviteComponent } from './collectivite/collectivite.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { NouvelleaquantineComponent } from './regions/nouvelleaquantine/nouvelleaquantine.component';
import { CollectiviteterritorialemartiniqueComponent } from './regions/collectiviteterritorialemartinique/collectiviteterritorialemartinique.component';
import { GuadeloupeComponent } from './regions/guadeloupe/guadeloupe.component';
import { CorseComponent } from './regions/corse/corse.component';
import { IledefranceComponent } from './regions/iledefrance/iledefrance.component';



import { AgenceComponent } from './agence/agence.component';
import { AuthGuard } from 'src/app/security/auth.guard';

import { HometpepmeComponent } from './hometpepme/hometpepme.component';
import { NormandieComponent } from './regions/normandie/normandie.component';
import { GrandestComponent } from './regions/grandest/grandest.component';
import { AuvergneComponent } from './regions/auvergne/auvergne.component';
import { HautedefranceComponent } from './regions/hautedefrance/hautedefrance.component';
import { PayedeloireComponent } from './regions/payedeloire/payedeloire.component';
import { PassOublierComponent } from './pass-oublier/pass-oublier.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

const routes: Routes = [{ path: '', component: CpnComponent,
children:[
  {path: 'Connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path:'profile',component: ProfileComponent},
  {path:'agenda',component: AgendaComponent},
  {path:'calendar',component:CalandarComponent,canActivate: [AuthGuard]},
  {path:'mail',component:PassOublierComponent},
  {path:'reset-password/:token',component:ChangePassComponent},



  {path:'region/nouvelle_aquantine',component:NouvelleaquantineComponent },
  {path:'region/Collectivite_territoriale_de_martinique',component: CollectiviteterritorialemartiniqueComponent},
  {path:'region/Guadeloupe',component: GuadeloupeComponent},
  {path:'region/Corse',component: CorseComponent},
  {path:'region/Ile_de_france',component: IledefranceComponent},
  {path:'region/Normandie',component: NormandieComponent},
  {path:'region/Grand_est',component: GrandestComponent},
  {path:'region/auvergne',component: AuvergneComponent},
  {path:'region/haute_de_france',component: HautedefranceComponent},
  {path:'region/paye_de_loire',component: PayedeloireComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpnRoutingModule { }
