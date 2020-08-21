import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CantantesComponent } from './pages/cantantes/cantantes.component';
import { HomeComponent } from './pages/home/home.component';
import { AgregarCantanteComponent } from './pages/agregar-cantante/agregar-cantante.component';
import { BuscarCantanteComponent } from './pages/buscar-cantante/buscar-cantante.component';
import { AgregarCancionComponent } from './pages/agregar-cancion/agregar-cancion.component';
import { CancionesComponent } from './pages/canciones/canciones.component';
import { ContainerComponent } from './container/container/container.component';
import { BuscarCancionComponent } from './pages/buscar-cancion/buscar-cancion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CantantesComponent,
    HomeComponent,
    AgregarCantanteComponent,
    BuscarCantanteComponent,
    AgregarCancionComponent,
    CancionesComponent,
    ContainerComponent,
    BuscarCancionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
