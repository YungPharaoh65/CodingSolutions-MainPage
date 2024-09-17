import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavbarComponent],
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class ComingSoonComponent implements AfterViewInit {
  @ViewChild('typewriter') typewriterElement!: ElementRef; // Accessing the typewriter element

  ngAfterViewInit(): void {
    // Set up IntersectionObserver after the view has been initialized
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.typewriterElement.nativeElement.classList.add('animate'); // Add 'animate' class when in view
        }
      });
    });

    // Observe the typewriter element
    if (this.typewriterElement) {
      observer.observe(this.typewriterElement.nativeElement);
    }
  }
}
