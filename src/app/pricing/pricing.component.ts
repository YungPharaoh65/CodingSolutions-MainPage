import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink,  FontAwesomeModule,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnInit {
 
toggleDarkMode() {
throw new Error('Method not implemented.');
}

  isRotating = false;
  isDesktop: boolean = false;

  constructor(private renderer: Renderer2) {}

   faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;


  ngOnInit(): void {
    this.checkDevice(); // Check device on initialization
    
    // Trigger the fade-in effect
    const contentContainer = document.querySelector('.main-container'); // Replace with your actual container class
    if (contentContainer) {
      this.renderer.addClass(contentContainer, 'fade-in');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkDevice();
  }

  checkDevice() {
    const width = window.innerWidth;
    this.isDesktop = width >= 1025;
    console.log(`Screen width: ${width}, Is Desktop: ${this.isDesktop}`);
  }

  enroll() {
    window.open('https://wa.me/message/UE6XNJVTRE7IM1', '_blank');
  }
}