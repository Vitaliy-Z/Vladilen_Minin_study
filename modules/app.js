import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";

export default class App {
  #mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
  ];

  constructor() {
    this.donates = this.#mockDonates;
  }

  run() {
    const donateForm = new DonateForm();
    const donateList = new DonateList(this.donates);
    document.body.append(donateForm.render(), donateList.render());
  }
}
