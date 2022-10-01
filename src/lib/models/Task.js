import makeId from "./MakeId";

export class Task {
  constructor(title) {
    this.id = makeId();
    this.title = title;
  }
}
