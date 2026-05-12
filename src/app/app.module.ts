import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardsComponent } from './components/cards/cards.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AppRoutingModule } from './app-routing.module';
import { SolucionesComponent } from './components/soluciones/soluciones.component';
import { NuestroEquipoComponent } from './components/nuestro-equipo/nuestro-equipo.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { ComplianceComponent } from './components/compliance/compliance.component';
import { NuestraFirmaComponent } from './components/nuestra-firma/nuestra-firma.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactusComponent,
    BlogComponent,
    CardsComponent,
    NosotrosComponent,
    SolucionesComponent,
    NuestroEquipoComponent,
    AliadosComponent,
    ComplianceComponent,
    NuestraFirmaComponent,
    PoliticaPrivacidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
