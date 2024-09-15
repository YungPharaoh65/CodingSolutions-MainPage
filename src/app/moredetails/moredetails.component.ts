import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

}
