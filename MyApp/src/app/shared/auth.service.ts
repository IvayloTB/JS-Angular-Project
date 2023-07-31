import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData: any;
  constructor(private auth: Auth, private router: Router, public ngZone: NgZone) {
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

 
  
  getAuthFire() {
    return this.auth.currentUser;
  }


 
  getAuthLocal() {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user;
  }


 
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user !== null ? true : false;
  }



  signUp(email: string, password: string, repass: string) {
    if(password === repass){
      return createUserWithEmailAndPassword(this.auth, email, password)
        .then((result) => {
          this.UserData = result.user;
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }else{
      return window.alert("passwords don't match")
    }
  }


  
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result: any) => {
        this.UserData = result.user;
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }



  logOut() {
    signOut(this.auth).then(() => this.router.navigate(['/SignIn']))
    console.log(this.UserData);


  }

}
