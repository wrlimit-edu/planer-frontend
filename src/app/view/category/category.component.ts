import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private selectedCategory: Category;

  /* INPUT */

  @Input()
  private categories: Category[];

  /* OUTPUT */

  @Output()
  selectCategory = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory);
  }
}
