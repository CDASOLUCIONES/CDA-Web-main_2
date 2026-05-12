import { Component, AfterViewInit, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Lógica a ejecutar durante la inicialización del componente
  }

  redirectToSoluciones() {
    this.router.navigate(['/soluciones']);
  }

  ngAfterViewInit(): void {
    this.addAnimationClass();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.addAnimationClass();
  }

  addAnimationClass(): void {
    const elements = this.el.nativeElement.querySelectorAll('.animate-fade-in-up');
    elements.forEach((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.75) {
        this.renderer.addClass(element, 'fade-in-up');
      }
    });
  }
}
