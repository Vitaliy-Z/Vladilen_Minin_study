export default class App {
  constructor() {}

  run() {
    const text = document.createElement("p");
    text.textContent = "Hello World";

    document.body.append(text);
  }
}
