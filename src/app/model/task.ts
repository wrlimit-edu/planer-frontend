import {Category} from './category';
import {Priority} from './priority';

export class Task {
  id: string;
  name: string;
  category: Category;
  priority: Priority;
  completed: boolean;
  date: Date;

  constructor(id: string, name: string, category: Category, priority: Priority, completed: boolean, date: Date) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.priority = priority;
    this.completed = completed;
    this.date = date;
  }
}
