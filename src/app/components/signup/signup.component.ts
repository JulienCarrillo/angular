import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  roles: string[] = ['Patient','Doctor'];
  genders: string[] = ['Male','Female'];
  hide = {pwd: true, retypePwd: true};

  constructor( 
    private readonly api: ApiService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(){
  
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      gender:[''],
      role:[''],
      address: [''],
    });
  }
  signup(){
    console.log("pipi");
    if (!this.form.invalid) {
      const user = this.form.value;
      console.log(user.email);
      console.log(user.firstName);
      console.log(user.lastName);
      console.log(user.password);
      console.log(user.gender);
      console.log(user.role);
      console.log(user.address);
      
      this.api.put(`auth/signup`,user).toPromise().then(
        success => console.log("success : ", success), 
        error => console.log("error : ", error));
    }
  }
}
