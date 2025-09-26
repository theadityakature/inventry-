import { Component, model } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
   isNavbar = false;

  toggleSidebar(event: any) {
    this.isNavbar = event.target.checked;
        console.log(this.isNavbar);
    
    // Optional: Save preference to localStorage
    localStorage.setItem('layoutMode', this.isNavbar ? 'navbar' : 'sidebar');
  }

  ngOnInit() {
    // Load saved preference on component initialization
    const savedMode = localStorage.getItem('layoutMode');
    if (savedMode === 'navbar') {
      this.isNavbar = true;
    }
}
}



