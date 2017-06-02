import {Component, Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})

@Injectable()
export class AppComponent {
  rows= [];
  searchForm: FormGroup;
  totalItems: number = 0;
  currentPage: number = 1;
  sortOptions = [
    { value: 'date-posted-asc', label: 'Date posted ascending' },
    { value: 'date-posted-desc', label: 'Date posted descending' },
    { value: 'date-done-asc', label: 'Date done ascending' },
    { value: 'date-done-desc', label: 'Date done descending' },
    { value: 'interestingness-asc', label: 'Interestingness ascending' },
    { value: 'interestingness-desc', label: 'Interestingness descending' },
    { value: 'relevancy', label: 'Relevancy' }
  ];
  contentTypes = [
    { value: 1, label: 'Photos'},
    { value: 2, label: 'Screenshots'},
    { value: 3, label: 'Other'},
    { value: 4, label: 'Photos and scrrenshots'},
    { value: 5, label: 'Scrrenshots and other'},
    { value: 6, label: 'Photos and other'},
    { value: 7, label: 'All'}
  ];

  constructor(private dataService:DataService, private fb:FormBuilder) {
    this.searchForm = fb.group({
      text: ['', [Validators.required]],
      sort: ['date-posted-asc', [Validators.required]],
      content_type: [7, [Validators.required]],
      tags: ''
    });
  }

  loadData() {
    if (this.searchForm.valid) {
      this.dataService.getList(this.searchForm.value, this.currentPage).subscribe(response => {
        const data = response.json();
        this.rows = data.photos.photo;
        this.totalItems = data.photos.total;
      });
    }
  }
}
