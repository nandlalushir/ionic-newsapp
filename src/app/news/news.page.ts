import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  page = 1;
  todaysDate: string;

  constructor(private newsService:NewsService,private router: Router) {
    this.getTodaysDate();
   }

  ngOnInit() {
    this.newsService.getData("/everything?q=bitcoin&from="+this.todaysDate+"&sortBy=publishedAt").subscribe(data=> {
      // console.log(data);
      this.data=data;
    });
  }

  getTodaysDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var date = yyyy + '-'+mm+'-'+dd;
    this.todaysDate = date;
  }

  onGoToNewsSinglePage(article:any) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  loadMoreNews(event) {
    this.page++;
    console.log(event);
    this.newsService
      .getData(
        `/everything?q=bitcoin&from=${this.todaysDate}&sortBy=publishedAt${
          this.page
        }`
      )
      .subscribe(data => {
        // console.log(data);
        // this.data = data;
        for (const article of data['articles']) {
          this.data.articles.push(article);
        }
        event.target.complete();
        console.log(this.data);
      });
  }

}
