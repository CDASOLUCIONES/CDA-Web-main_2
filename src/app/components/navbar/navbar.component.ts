import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileOpen = false;
  scrolled = false;
  navItems: Array<{ label: string; route: string }> = [];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.navItems = [
      { label: 'Inicio', route: '/' },
      { label: 'Soluciones', route: '/soluciones' },
      { label: 'Servicios', route: '/servicios' },
      { label: 'Nuestra Firma', route: '/nuestra-firma' },
      { label: 'Gobierno corporativo', route: '/compliance' },
      { label: 'Agendar Consultoria', route: '/contactus' }
    ];
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  mobileOpenState(): boolean {
    return this.mobileOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.scrolled = window.pageYOffset > 0;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // No dropdown state to reset after removing submenu behavior.
  }
}
