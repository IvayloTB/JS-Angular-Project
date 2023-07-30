import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})




export class CreatepostComponent {
  
  constructor(private http:HttpClient){}

  createPost(postscr: {title:string, description:string}){
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
      .subscribe((res)=>{
      })
      
    }
    
    
  }

  
    
}
