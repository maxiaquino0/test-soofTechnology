import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CantantesComponent } from './pages/cantantes/cantantes.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { AgregarCantanteComponent } from './pages/agregar-cantante/agregar-cantante.component';
import { BuscarCantanteComponent } from './pages/buscar-cantante/buscar-cantante.component';
import { CancionesComponent } from './pages/canciones/canciones.component';
import { ContainerComponent } from './container/container/container.component';
import { AgregarCancionComponent } from './pages/agregar-cancion/agregar-cancion.component';
import { BuscarCancionComponent } from './pages/buscar-cancion/buscar-cancion.component';



const routes: Routes = [
  { path: '', component: ContainerComponent, canActivate: [AuthGuard],
    children:[
      {path: '', component: HomeComponent},
      {path: 'cantantes', component: CantantesComponent},
      {path: 'agregarCantante', component: AgregarCantanteComponent},
      {path: 'buscarCantante', component: BuscarCantanteComponent},
      {path: 'canciones', component: CancionesComponent},
      {path: 'agregarCancion', component: AgregarCancionComponent},
      {path: 'buscarCancion', component: BuscarCancionComponent}
    ]
  },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
