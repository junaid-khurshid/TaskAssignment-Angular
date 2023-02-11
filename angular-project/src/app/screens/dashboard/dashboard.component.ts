import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  submitted = false
  showPassword = false
  resp: any;
  data: any;
  success = false;
  serviceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
  });
  
 



  constructor(private dashboardservice: DashboardService,
    private router: Router) { }

  ngOnInit(): void {
   
  }

  submit(): void {
    this.submitted = true
    // if(this.serviceForm.valid){
    //   this.dashboardservice.postData(this.serviceForm.value).subscribe((x: any) => {
    //     if (x.statusCode == 200) {
    //      data = x.data;
    //      success = true;
    //     }
    //     else {

    //     }
    // resp = x.message;
    //   }, (error) => {
      
    //     if (error) {
    //       console.log(error.error.message)
    //        resp = error.error.message;
    //     }
    //   })
    // }
  
  }

  home(){
    this.success = !this.success;
  }

 
  
}