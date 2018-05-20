import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ProductService} from './product.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
 import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './/app-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { ArticleComponent } from './article/article.component';
import {MatTableModule} from '@angular/material/table';
import { TableTestComponent } from './table-test/table-test.component';
import {MatDialogModule} from "@angular/material";
import { Mongo2Service } from './mongo2.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    CatalogComponent,
    FormComponent,
    DetailsComponent,
    ArticleComponent,
    TableTestComponent
  ],
  imports: [

  MatDialogModule,
    MatTableModule,
    HttpModule,
   MatFormFieldModule,
     FormsModule,
    BrowserModule,
    MatButtonToggleModule,
    MatIconModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,

    MatTabsModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot(), AppRoutingModule
    
  ],
  
  providers: [
  ProductService,
  Mongo2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export class MenuOverviewExample {}




export class PizzaPartyAppModule { }





export class MyOwnCustomMaterialModule { }

