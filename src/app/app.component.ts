import {Component, Injectable, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()

export class AppComponent implements OnInit {

  constructor(private dataService:DataService){
  }

  ngOnInit() {
    this.dataService.getList().subscribe(response => {
      const data = JSON.parse(response.text().replace(/^jsonFlickrApi\(/, '').replace(/\)$/, ''));
      console.log(data);
    });
  }
}
