import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Post } from '../postspage/post';
import { map } from 'rxjs';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  constructor(private http: HttpClient){}
  myPost: Post[] = [];

  ngOnInit(): void {
    this.fetchPost();
  }

  deletePost(id:string){
    const auth = getAuth();
    const user = auth.currentUser;
    this.http.delete(`https://angular-project-f5fdc-default-rtdb.firebaseio.com/users/${user.uid}/${id}.json`).subscribe();
    this.http.delete(`https://angular-project-f5fdc-default-rtdb.firebaseio.com/posts${id}.json`).subscribe();
    this.refreshComponent()
  }
  
  refreshComponent(){
    let a: number;
    a = window.setTimeout(function() {
      window.location.reload()
    }, 500);    
 }
 
 token = localStorage.getItem('user')
 user = JSON.parse(this.token as string);


 


  get isLogged(): boolean {    
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
      return true
    } else {
      return false
    }
      }

      
  private fetchPost() {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    this.http.get(`https://angular-project-f5fdc-default-rtdb.firebaseio.com/users/${user.uid}.json`)
    .pipe(map((res: { [key: string]: Post }) => {
      const posts = [];   
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          posts.push({ ...res[key ], id: key })
         
        }
      }
      
      return posts;
      }))
      .subscribe((posts) => {
        this.myPost = posts;
       
      })
  }

 
}


