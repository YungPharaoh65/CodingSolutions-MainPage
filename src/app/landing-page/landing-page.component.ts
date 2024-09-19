import { Component, HostListener, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { faInbox, faCode } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faHtml5,
  faCss3,
  faFigma,
  faAngular,
  faReact,
  faPython,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { NgxLoadingModule } from '@dchtools/ngx-loading-v18';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    RouterOutlet,
    NavbarComponent,
    NgxLoadingModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @ViewChild('typewriter') typewriterElement!: ElementRef; // Accessing the element using ViewChild

  faInbox = faInbox;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;

  faHtml5 = faHtml5;
  faGithub = faGithub;
  faAngular = faAngular;
  faReact = faReact;
  faPython = faPython;
  faCss3 = faCss3;
  faFigma = faFigma;

  faCode = faCode;

  loading = false;
  isDesktop: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkDevice(); // Check device on initialization
  }

  ngAfterViewInit(): void {
    // Set up IntersectionObserver after the view has been initialized
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.typewriterElement.nativeElement.classList.add('animate'); // Add 'animate' class when in view
        }
      });
    });

    observer.observe(this.typewriterElement.nativeElement); // Observe the typewriter element
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkDevice(); // Check device on window resize
  }

  checkDevice() {
    const width = window.innerWidth;
    this.isDesktop = width >= 1025;
    console.log(`Screen width: ${width}, Is Desktop: ${this.isDesktop}`);
  }

  onButtonClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/pricing']);
    }, 3000);
  }

   
}
