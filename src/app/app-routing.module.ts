import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './includes/guard.guard';
import { LoginGuard } from './includes/login.guard';
import { LoginComponent } from './includes/login/login.component';
import { NavComponent } from './includes/nav/nav.component';
import { AffectationComponent } from './pages/affectation/affectation.component';
import { AjoutAffectationComponent } from './pages/ajout-affectation/ajout-affectation.component';
import { AjoutApiComponent } from './pages/ajout-api/ajout-api.component';
import { AjoutApplicationComponent } from './pages/ajout-application/ajout-application.component';
import { AjoutCategorieComponent } from './pages/ajout-categorie/ajout-categorie.component';
import { AjoutIntervenantComponent } from './pages/ajout-intervenant/ajout-intervenant.component';
import { AjoutTagsComponent } from './pages/ajout-tags/ajout-tags.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { DetailApiComponent } from './pages/detail-api/detail-api.component';
import { DetailIntervenantComponent } from './pages/detail-intervenant/detail-intervenant.component';
import { ListAffectationsComponent } from './pages/list-affectations/list-affectations.component';
import { ListApisComponent } from './pages/list-apis/list-apis.component';
import { ListApplicationsComponent } from './pages/list-applications/list-applications.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { ListIntervenantsComponent } from './pages/list-intervenants/list-intervenants.component';
import { TypeApiComponent } from './pages/type-api/type-api.component';
import { UpdateAffectationComponent } from './pages/update-affectation/update-affectation.component';
import { UpdateApiComponent } from './pages/update-api/update-api.component';
import { UpdateIntervenantComponent } from './pages/update-intervenant/update-intervenant.component';

const routes: Routes = [
  {
    path: '', redirectTo:'Home',  pathMatch:'full'
  },
 {path: 'Home' , component : DasboardComponent},
 {path: 'ListApis',component : ListApisComponent ,canActivate:[LoginGuard]},
 {path: 'UpdateApi/:id',component : UpdateApiComponent },
 {path: 'AjoutIntervenant',component : AjoutIntervenantComponent},
 {path: 'UpdateIntervenant/:id',component : UpdateIntervenantComponent},
 {path: 'ListIntervenants',component : ListIntervenantsComponent,canActivate:[LoginGuard]},
 {path: 'AjoutAffectation',component : AjoutAffectationComponent},
 {path: 'UpdateAffectation',component : UpdateAffectationComponent},
 {path: 'AjoutCategorie',component : AjoutCategorieComponent},
 {path: 'ListCategories',component : ListCategoriesComponent},
 {path: 'AjoutTags',component : AjoutTagsComponent},
 {path: 'ListApplications',component : ListApplicationsComponent},
 {path: 'UpdateAffectation',component : UpdateAffectationComponent},
 {path: 'AjoutApplication',component : AjoutApplicationComponent},
 {path: 'DetailApi/:id',component : DetailApiComponent},
 {path: 'Affectation/:id',component : AffectationComponent},
 {path: 'ListAffectation',component : ListAffectationsComponent},
 {path: 'DetailIntervenant/:id',component : DetailIntervenantComponent},
 {path: 'AjoutApi',component : AjoutApiComponent},
 {path: 'AjoutypeAPI',component : TypeApiComponent},
 {path:'Login', component:LoginComponent },
 {path: 'Dashboard',component : DasboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
