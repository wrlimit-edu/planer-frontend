import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from './service/category.service';
import {Category} from './model/category';
import {Task} from "./model/task";
import {TaskService} from "./service/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'Планер задач';

  /* CATEGORY */

  private categories: Category[];
  private selectedCategory: Category;

  /* TASK */

  private tasks: Task[];

  constructor(
    private categoryService: CategoryService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
    this.showCategoryRoot(null);
  }

  showCategoryRoot(category: Category) {
    if (category == null) {
      this.selectedCategory = null;
      this.taskService.getAll().subscribe(tasks => this.tasks = tasks);
    } else {
      this.selectedCategory = category;
      this.taskService.getAllByCategory(this.selectedCategory).subscribe(tasks => this.tasks = tasks);
    }
  }

  rootAddTask(task: Task) {
    this.taskService.create(task).subscribe();
    this.showCategoryRoot(task.category);
  }
}
