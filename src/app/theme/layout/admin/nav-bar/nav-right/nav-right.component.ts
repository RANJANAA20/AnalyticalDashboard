import { Router, RouterModule } from '@angular/router';
// Angular import
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  constructor(private router:Router){}
  logout(): void {
    // Add logic here to clear any stored authentication tokens or user information
    // For example, you can clear the token from localStorage
    // localStorage.removeItem('token');

    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }
}
