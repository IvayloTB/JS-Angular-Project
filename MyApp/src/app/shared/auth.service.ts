import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router: Router) { }

  //sign in
  signIn(email: string, password:string){                                                     
    this.fireauth.signInWithEmailAndPassword(email,password).then(() =>{
      localStorage.setItem('token','true');
      this.router.navigate(['']);
    },
    err =>{
      alert('Something went wrong');
      this.router.navigate(['/SignIn']);
    }
    )
  }                
  
  //register
  signUp(email: string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(() =>{
      alert('Registration coplete');
      this.router.navigate(['SignIn']);
    },
    err =>{
      alert(err.message);
      this.router.navigate(['/Signin']);
    }
    )
  }

  //sign out
  signOut(){
    this.fireauth.signOut().then(() =>{
      localStorage.removeItem('token');
      this.router.navigate(['']);
    }, err => {
      alert(err.message);
    }
    )
  }
}
