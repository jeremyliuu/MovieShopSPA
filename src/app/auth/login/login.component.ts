import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login = {
    email: '',
    password: ''
  }
  invalidLogin: boolean;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  login() {
    console.log('submit button clicked!');
    console.log(this.userLogin);
    // once you get un/pw we need to send it to API through service
    this.authService.login(this.userLogin).subscribe(
      (response) => {
        if (response) {
          // navigate to home page
          this.router.navigate(['/']);
        }
        else {
          this.invalidLogin = true;
        }
      }
    );
  }

}
