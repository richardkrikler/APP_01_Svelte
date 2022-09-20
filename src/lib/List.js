import { Task } from "./Task"

export class List {
  constructor(name) {
    this.id = Math.random()
    this.name = name
    this.edit = false
    this.tasks = []
  }

  getTasks() {
    return this.tasks
  }

  addTask(task) {
    this.tasks.push(new Task(task))
  }

  removeTask(task) {
    // TODO
  }
}