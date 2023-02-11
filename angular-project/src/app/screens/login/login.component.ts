import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false
  showPassword = false
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  
 



  constructor(private authservice: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    var result = this.authservice.isLoggedIn()
    if (result) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login(): void {
    this.submitted = true
    // if(this.loginForm.valid){
    //   this.authservice.login(this.loginForm.value).subscribe((x: any) => {
    //     if (x.statusCode == 200) {
    //       let token = x.data.accessToken.accessToken;
    //       this.authservice.saveToken(token);
    //       this.router.navigateByUrl('/dashboard');

    //     }
    //     else {
    //       this.router.navigateByUrl('/login');
    //     }
    //   }, (error) => {
      
    //     if (error) {
    //       console.log(error.error.message)
    //     }
    //   })
    // }
  
  }

 
  
}