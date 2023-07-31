import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})



export class CreatepostComponent {
  
  constructor(private http:HttpClient,private authService:AuthService,public router:Router){}
  
  
  createPost(postscr: {title:string, description:string }){
    const userId = this.authService.UserData.uid;
    if(postscr.title == "" || postscr.description == ""){
      if(postscr.title == "" && postscr.description == ""){
        alert('Header and Description reqired');
      }else if(postscr.description == ""){
        alert('Descriptoin reqired');
      }else{
        alert('Header reqired')
      }
    }else{
      this.http.post('https://angular-project-f5fdc-default-rtdb.firebaseio.com/posts.json', postscr)
      .subscribe((res)=>{ })
      this.http.post(`https://angular-project-f5fdc-default-rtdb.firebaseio.com/users/${userId}.json`, postscr)
      .subscribe((res)=>{ })
      
    }
    window.location.reload()
    window.alert('Personal note created')
  
  }

  
    
}
