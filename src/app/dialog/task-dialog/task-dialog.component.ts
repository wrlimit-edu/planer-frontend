import {AfterContentInit, AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../model/task";
import {Priority} from "../../model/priority";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {PriorityService} from "../../service/priority.service";

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  private dialogTitle: string;
  private task: Task;
  private tmpTask: Task;
  private categories: Category[];
  private priorities: Priority[];
  private category: Category;

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string],
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private priorityService: PriorityService
  ) { }

  ngOnInit() {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpTask = new Task(this.task.id, this.task.name, this.task.category, this.task.priority, this.task.completed, this.task.date);
    this.categoryService.getAll().subscribe(items => this.categories = items);
    this.priorityService.getAll().subscribe(items => this.priorities = items);
    this.category = this.tmpTask.category;
    console.log(this.tmpTask.category);
  }

  private onConfirm(): void {
    this.task.name = this.tmpTask.name;
    this.task.category = this.tmpTask.category;
    this.task.priority = this.tmpTask.priority;
    this.task.date = this.tmpTask.date;
    this.dialogRef.close(this.task);
  }
}
