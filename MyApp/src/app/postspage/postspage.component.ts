import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  map } from 'rxjs';
import { Post } from './post';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../user/user.service';
import { Auth, getAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-postspage',
  templateUrl: './postspage.component.html',
  styleUrls: ['./postspage.component.css']
})
export class PostspageComponent implements OnInit {

  constructor(private http: HttpClient, public authService: AuthService, public user: UserService, private db:AngularFireDatabase) { }
  allPosts: Post[] = [];
  

 
  ngOnInit(): void {
    this.fetchPosts();
  }

  
  get isLogged(): boolean {    
const auth = getAuth();
const user = auth.currentUser;
if (user) {
  return true
} else {
  return false
}
  }

  get isLoggedIn(): boolean {       
    return this.authService.isLoggedIn
  }
 


  private fetchPosts() {
    this.http.get(`https://angular-project-f5fdc-default-rtdb.firebaseio.com/posts.json`)
    .pipe(map((res: { [key: string]: Post }) => {
      const posts = [];        
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          posts.push({ ...res[key], id: key })
        }
      }
      
      return posts;
      }))
      .subscribe((posts) => {
        this.allPosts = posts;
        
      })
  }
}
