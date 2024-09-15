import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
  faJava,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-moredetails',
  standalone: true,
  imports: [RouterLink,  FontAwesomeModule,
  ],
  templateUrl: './moredetails.component.html',
  styleUrl: './moredetails.component.css'
})
export class MoredetailsComponent {
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
  faJava = faJava;

  faCode = faCode;
  loading: boolean | undefined;

  constructor(private router: Router) {}
  isDesktop: boolean = false; // Default value set to false

  ngOnInit(): void {
    this.checkDevice(); // Check device on initialization
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
