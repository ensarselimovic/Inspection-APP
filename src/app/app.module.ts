import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { InspectionApiService } from './services/inspection-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    AddEditInspectionComponent,
    ShowInspectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [InspectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
