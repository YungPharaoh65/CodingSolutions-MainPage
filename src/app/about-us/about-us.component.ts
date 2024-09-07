import { Component } from '@angular/core';
 import { NavbarComponent } from "../navbar/navbar.component";

 import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons'; 
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';


 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ FontAwesomeModule, NavbarComponent,RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  
  faGithub=faGithub;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faAngular=faAngular;
  faReact=faReact;
  faPython=faPython;
  faLaravel=faLaravel;
  faJava=faJava;
 

   
}
