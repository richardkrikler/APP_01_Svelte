import makeId from "./MakeId";

export class Task {
  constructor(title, dueDate = null, description = "") {
    this.id = makeId();
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
  }
}
