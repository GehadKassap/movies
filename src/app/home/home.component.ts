
import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   trendingAll:any[]  = [];
  constructor(public _MovieService:MovieService)
  {
     _MovieService.getTrendingAll().subscribe( (data) =>{
      this.trendingAll = data.results;
       //console.log(this.trendingAll)

      //  for(let i = 0 ; i <data.results.length ; i++)
      //  {
      //   data.results[i].poster_path = ""+  data.results[i].poster_path;
      //   this.trendingAll.push(data.results[i]);
      //  }
    })
  }

  ngOnInit(): void {
  }

}
