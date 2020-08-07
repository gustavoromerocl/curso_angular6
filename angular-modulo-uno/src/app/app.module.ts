import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruteriaComponent } from './fruteria/fruteria.component';
import { ListaFrutasComponent } from './lista-frutas/lista-frutas.component';

@NgModule({
  declarations: [
    AppComponent,
    FruteriaComponent,
    ListaFrutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
