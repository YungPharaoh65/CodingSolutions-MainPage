import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterOutlet } from '@angular/router'; // Ensure routing is used properly
import { NavbarComponent } from '../navbar/navbar.component'; // Ensure NavbarComponent is either standalone or from a module
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
  ], // Ensure correct imports
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
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

  constructor(private router: Router) {} // Inject Router

  onButtonClick() {
    this.loading = true;

    // Simulate a delay (e.g., for an HTTP request or loading effect)
    setTimeout(() => {
      this.loading = false;
      // Navigate to the target route
      this.router.navigate(['/pricing']);
    }, 3000); // 3 seconds
  }

  // Use the correct path if you are sticking with the 'public' directory
downloadPdf(): void {
  const pdfUrl = 'public/information(12).pdf'; // Correct path if using the public directory
  const filename = 'information(12).pdf';
  this.downloadPdfFile(pdfUrl, filename);
}


downloadPdfFile(url: string, filename: string): void {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => saveAs(blob, filename))
    .catch((err) => console.error('Error downloading PDF:', err));
}

}

function saveAs(blob: Blob, filename: string): any {
  throw new Error('Function not implemented.');
}
