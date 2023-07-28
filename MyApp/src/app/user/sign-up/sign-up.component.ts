import { Component, OnInit } from '@angular/core';
//import { AuthService } from '';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string = '';
  password: string = '';
  repassword:string = '';

  //constructor(private auth: AuthService){}

ngOnInit(): void {
}

signUp() {
  if (this.email == '') {
    alert('Please enter email.')
    return;
  }

  if (this.password == '') {
    alert('Please enter password');
    return;
  }

  if (this.repassword == '') {
    alert('Please enter repassword');
    return;
  }
  //this.auth.signUp(this.email, this.password);

  this.email = '';
  this.password = '';
  this.repassword = '';
}


}
 