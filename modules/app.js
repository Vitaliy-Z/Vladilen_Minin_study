import { DonateForm } from "./donate-form";

export default class App {
  constructor() {}

  run() {
    const donateForm = new DonateForm();
    document.body.append(donateForm.render());
  }
}
