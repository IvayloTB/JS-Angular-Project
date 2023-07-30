import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './shared/auth.guard';
import { SecureInnerPageGuard } from './shared/secure-inner-page.guard';
import { NewsComponent } from './news/news.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { PostspageComponent } from './postspage/postspage.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, },
  { path: 'SignUp', component: SignUpComponent, canActivate: [authGuard] },
  { path: 'SignIn', component: SignInComponent, canActivate: [authGuard] },
  { path: 'news', component: NewsComponent },
  { path: 'create', component: CreatepostComponent, canActivate: [authGuard]},
  {path: 'posts', component:PostspageComponent, canActivate: [authGuard]},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
