import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableBasicExample } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './dialog/dialog.overview-example';
import {FormFieldErrorExample } from './email/form-field-error-example';
import {FormFieldCustomControlExample, MyTelInput} from './phone-number/form-field-custom-control-example';
import {FiltreOverview, FiltreOverviewFiltrer} from './filtre/filtre-overview';
import {DateRangePickerComparisonExample} from './datepicker/date-range-picker-comparison-example';
import {MatNativeDateModule} from '@angular/material/core';
import {CompleteProfile, CompleteProfileDialog} from './complete-profile/complete-profile';
import {AddExperience, AddExperienceDialog} from './add-experience/add-experience';
import {AddFormation, AddFormationDialog } from './add-formation/add-formation';
import { ModifyExperience, ModifyExperienceDialog } from './modify-experience/modify-experience';
import { ModifyFormation, ModifyFormationDialog } from './modify-formation/modify-formation';
import { ModifyCv, ModifyCvDialog } from './modify-cv/modify-cv';
import { AddCv, AddCvDialog } from './add-cv/add-cv';
import {NgApexchartsModule } from 'ng-apexcharts';
import { ChartPie } from './piechart/piechart';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  imports:      [ NgApexchartsModule ,MatNativeDateModule, MatCheckboxModule, BrowserModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule, AppRoutingModule],
  declarations: [ SpinnerComponent, ChartPie, AddCv, AddCvDialog, ModifyCv, ModifyCvDialog, ModifyFormation, ModifyFormationDialog, ModifyExperience, ModifyExperienceDialog, AddFormation, AddFormationDialog, AddExperience, AddExperienceDialog, CompleteProfileDialog, CompleteProfile,  DateRangePickerComparisonExample,FiltreOverview, FiltreOverviewFiltrer, FormFieldCustomControlExample, MyTelInput, FormFieldErrorExample, DialogOverviewExampleDialog, DialogOverviewExample, HomeComponent, AppComponent, HeaderComponent, routingComponents, SearchComponent, TableBasicExample, LoginComponent, AdminComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
  
})


export class AppModule { 
}
