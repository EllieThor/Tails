import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AddProdFormComponent } from './pages/main/add-prod-form/add-prod-form.component';
import { DisplayProductsComponent } from './pages/main/display-products/display-products.component';
import { UsersComponent } from './pages/users/users.component';
import { SingleProductComponent } from './pages/main/single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import { MfrNavComponent } from './pages/main/mfr-nav/mfr-nav.component';
import { SingleManufacturerComponent } from './pages/main/single-manufacturer/single-manufacturer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddProdFormComponent,
    DisplayProductsComponent,
    UsersComponent,
    SingleProductComponent,
    MfrNavComponent,
    SingleManufacturerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
