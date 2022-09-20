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
    this.tasks.push(task)
  }

  removeTask(task) {
    // TODO
  }
}