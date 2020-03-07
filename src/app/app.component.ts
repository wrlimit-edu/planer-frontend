import {Component, OnInit} from '@angular/core';
import {CategoryService} from './service/category.service';
import {Category} from './model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'planer-frontend';
  private categories: Category[];

  constructor(
    //private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    //this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }
}
