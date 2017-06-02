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

  constructor(private dataService:DataService, private fb:FormBuilder) {
    this.searchForm = fb.group({
      text: ['', [Validators.required]]
    });
  }

  onSubmit(){
    this.dataService.getList(this.searchForm.value).subscribe(response => {
      const data = response.json();
      this.rows=data.photos.photo;
    });
  }
}
