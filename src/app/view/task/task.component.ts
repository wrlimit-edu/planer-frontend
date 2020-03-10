import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../model/task";
import {MatTableDataSource} from "@angular/material/table";
import {TaskDialogComponent} from "../../dialog/task-dialog/task-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  private tasks: Task[];
  private displayedColumns: string[] = ['color', 'name', 'category', 'priority', 'date'];
  private dataSource = new MatTableDataSource();

  @Input()
  private selectedCategory;

  @Input('tasks')
  private set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.refreshTable();
  }

  @Output()
  addTask = new EventEmitter<Task>();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }

  private openTaskDialog() {
    const task = new Task(null, '', this.selectedCategory, null, false, null);
    const dialogRef = this.dialog.open(TaskDialogComponent, {data: [task, 'Добавить задачу']});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTask.emit(task);
      }
    });
  }

}
