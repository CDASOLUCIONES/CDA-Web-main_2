import { Component, AfterViewInit } from '@angular/core';

interface NavLink {
  label: string;
  route?: string;
  url?: string;
  external?: boolean;
}

interface ContactInfo {
  type: string;
  value: string;
  icon?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  navLinks: NavLink[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Soluciones', url: '#soluciones' },
    { label: 'Aliados comerciales', route: '/aliados' },
    { label: 'Nosotros', route: '/nosotros' },
    { label: 'Contacto', url: '#contacto' }
  ];

  contactInfo: ContactInfo[] = [
    {
      type: 'address',
      value: 'Av. Providencia 1017, Oficina 41. Comuna Providencia - Región Metropolitana-Santiago de Chile',
      icon: 'location'
    },
    {
      type: 'phone',
      value: '+569 40238457',
      icon: 'phone'
    },
    // {
    //   type: 'address',
    //   value: 'Avenida Manuel Batista, Torre IBC, Piso 8, OF 805, Ciudad de Panamá',
    //   icon: 'location'
    // },
    {
      type: 'phone',
      value: '+507 65888621',
      icon: 'phone'
    },
    {
      type: 'email',
      value: 'contacto@cda-sol.com',
      icon: 'email'
    }
  ];

  socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Facebook', url: '#', icon: 'facebook' }
  ];

  currentYear = new Date().getFullYear();

  constructor() {}

  ngAfterViewInit(): void {
    // Animaciones adicionales si es necesario
  }
}
