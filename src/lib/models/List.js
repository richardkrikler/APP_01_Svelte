import { Task } from "./Task";
import makeId from "./MakeId";

export class List {
  constructor(name, edit = false) {
    this.id = makeId();
    this.name = name;
    this.edit = edit;
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(new Task(task));
  }

  removeTask(task) {
    // TODO
  }
}
