import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { ComingSoonComponent } from "../coming-soon/coming-soon.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, RouterLink, ComingSoonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
