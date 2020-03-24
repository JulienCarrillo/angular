import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { Cookie } from '@ngx-toolkit/cookie';
import { decode } from 'punycode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  @Cookie('accept-cookie')
  acceptedCookie: boolean;
  
  acceptCookie() {
    this.acceptedCookie = true;
  }
  
    hide = true;
    form:FormGroup;
  
  constructor(
    private readonly api: ApiService,
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  
   
 
  login(){
    if (!this.form.invalid) {
      const user = this.form.value;
      // var token = ;
      console.log(user.email);
      console.log(user.password);
      
      this.api.post(`auth/login`,user).toPromise().then(
        success => console.log("success : ", success),
        error => console.log("error : ", error)
        );
        
      //  (token: string) => {
      //      this.cookieSrv.setItem('token', token);
      //  const tokens = this.cookieSrv.getItem('token');
      //  //decode the token to get its payload
      // const tokenPayload = decode(tokens);
     
      // if (tokenPayload['role'] === 'Admin') { this.router.navigate(['home']); } else { this.router.navigate(['home']); }
     
      // },
       
    }
  }
}
