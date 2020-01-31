import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { FormularioComponent } from './proveedores/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProveedoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
