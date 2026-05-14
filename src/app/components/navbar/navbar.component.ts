import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mobileOpen = false;
  scrolled = false;

  navItems: Array<{ label: string; route: string }> = [];

  ngOnInit(): void {

    this.navItems = [
      { label: 'Inicio', route: '/' },
      { label: 'Soluciones', route: '/soluciones' },
      { label: 'Servicios', route: '/servicios' },
      { label: 'Nuestra Firma', route: '/nuestra-firma' },
      { label: 'Gobierno corporativo', route: '/compliance' },
      { label: 'Agendar Consultoría', route: '/contactus' }
    ];

  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile(): void {
    this.mobileOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 10;
  }

}