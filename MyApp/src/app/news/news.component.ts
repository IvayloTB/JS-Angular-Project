import { Component } from '@angular/core';
import { NewsapiserviceService } from './newsapiservice.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(private _service:NewsapiserviceService){}
  newsDisplay:any=[];

  ngOnInit(): void{

    this._service.news().subscribe((result)=>{
      console.log(result);
      this.newsDisplay = result.articles
      
    })

  }

  


}
