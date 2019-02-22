import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {
}