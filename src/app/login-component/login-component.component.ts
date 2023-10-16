import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent 
{
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Admin credentials are correct, perform the login logic here
      console.log('Admin logged in.');
      // Redirect to the admin dashboard or perform other actions.
      this.router.navigate(['/default']);
    } else {
      console.log('Invalid credentials. Admin login failed.');
      // Display an error message to the user
    }
  }
}
