import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { AjoutApiComponent } from './pages/ajout-api/ajout-api.component';
import { AjoutIntervenantComponent } from './pages/ajout-intervenant/ajout-intervenant.component';
import { AjoutApplicationComponent } from './pages/ajout-application/ajout-application.component';
import { AjoutCategorieComponent } from './pages/ajout-categorie/ajout-categorie.component';
import { AjoutTagsComponent } from './pages/ajout-tags/ajout-tags.component';
import { ListApisComponent } from './pages/list-apis/list-apis.component';
import { ListIntervenantsComponent } from './pages/list-intervenants/list-intervenants.component';
import { UpdateApiComponent } from './pages/update-api/update-api.component';
import { UpdateIntervenantComponent } from './pages/update-intervenant/update-intervenant.component';
import { UpdateAffectationComponent } from './pages/update-affectation/update-affectation.component';
import { AjoutAffectationComponent } from './pages/ajout-affectation/ajout-affectation.component';
import { ListApplicationsComponent } from './pages/list-applications/list-applications.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TagCloudModule } from 'angular-tag-cloud-module';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { DetailApiComponent } from './pages/detail-api/detail-api.component';
import { AffectationComponent } from './pages/affectation/affectation.component';
import { ListAffectationsComponent } from './pages/list-affectations/list-affectations.component';
import { DetailIntervenantComponent } from './pages/detail-intervenant/detail-intervenant.component';
import { NavComponent } from './includes/nav/nav.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './includes/login/login.component';
import { GuardGuard } from './includes/guard.guard';
import { ListApiCategoriesComponent } from './pages/list-api-categories/list-api-categories.component';

import { TagsComponent } from './pages/tags/tags.component';
import { CardComponent } from './includes/card/card.component';
import { ChartComponent } from './pages/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { RadarChartComponent } from './pages/radar-chart/radar-chart.component';
import { TypeApiComponent } from './pages/type-api/type-api.component';












@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AjoutApiComponent,
    AjoutIntervenantComponent,
    AjoutApplicationComponent,
    AjoutCategorieComponent,
    AjoutTagsComponent,
    ListApisComponent,
    ListIntervenantsComponent,
    UpdateApiComponent,
    UpdateIntervenantComponent,
    UpdateAffectationComponent,
    AjoutAffectationComponent,
    ListApplicationsComponent,
    ListCategoriesComponent,
    DetailApiComponent,
    AffectationComponent,
    ListAffectationsComponent,
    DetailIntervenantComponent,
    NavComponent,
    DasboardComponent,
    LoginComponent,
    ListApiCategoriesComponent,
    TagsComponent,
    CardComponent,
    ChartComponent,
    BarChartComponent,
    RadarChartComponent,
    TypeApiComponent,
 
 
 
   
   
 
    
   




  

  ],
  entryComponents:[AjoutApplicationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    LayoutModule,
    MatListModule,
    TagCloudModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    NgChartsModule
 
   


   
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
