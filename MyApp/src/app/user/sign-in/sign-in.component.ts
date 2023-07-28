import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string = '';
  password: string = '';
   constructor(/*private auth: AuthService*/ ) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.email == '') {
      alert('Please enter email.')
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    //this.auth.signIn(this.email, this.password);

    this.email = '';
    this.password = '';
  }

}
