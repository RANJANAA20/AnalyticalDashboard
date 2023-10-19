import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent 
{
  username: string = '';
  password: string = '';

  private loginUrl = "http://localhost:9090";

  constructor(private router: Router,private http:HttpClient) {}
  login() {
    // if (this.username === 'admin' && this.password === 'admin') {
    //   // Admin credentials are correct, perform the login logic here
    //   console.log('Admin logged in.');
    //   // Redirect to the admin dashboard or perform other actions.
    //   this.router.navigate(['/default']);
    // } else {
    //   console.log('Invalid credentials. Admin login failed.');
    //   // Display an error message to the user
    // }
    const credentials ={"username":this.username,"password":this.password}
    console.log("bf service")
    this.http.post(`${this.loginUrl}/login`,credentials).subscribe((response)=>{
      console.log(response)
      console.log("logged in");
      this.router.navigate(['/default']);
    }),
    (error) => {
      console.error('Error occurred:', error);
      // Handle the error here, you can redirect to an error page or display an error message to the user
    }
  }
}
