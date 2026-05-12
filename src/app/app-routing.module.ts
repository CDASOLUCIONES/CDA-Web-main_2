import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { SolucionesComponent } from './components/soluciones/soluciones.component';
import { ServicesComponent } from './components/services/services.component';
import { NuestroEquipoComponent } from './components/nuestro-equipo/nuestro-equipo.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ComplianceComponent } from './components/compliance/compliance.component';
import { NuestraFirmaComponent } from './components/nuestra-firma/nuestra-firma.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'soluciones', component: SolucionesComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'compliance', component: ComplianceComponent },
  { path: 'nuestra-firma', component: NuestraFirmaComponent },
  { path: 'equipo', component: NuestroEquipoComponent },
  { path: 'aliados', component: AliadosComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }