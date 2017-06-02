import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dataPhoto: any;
  dataExif;

  constructor(private dataService:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.dataService.getPhoto(params.id).subscribe(response => {
        const data = response.json();
        this.dataPhoto = data.photo;
      });

      this.dataService.getExif(params.id).subscribe(response => {
        const data = response.json();
        this.dataExif = data.photo.exif;
      });
    });
  }
}
