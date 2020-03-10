import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  /* INPUT */

  @Input()
  private categories: Category[];

  @Input()
  private selectedCategory: Category;

  /* OUTPUT */

  @Output()
  showCategoryEvent = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  showCategory(category: Category) {
    this.showCategoryEvent.emit(category);
  }
}
