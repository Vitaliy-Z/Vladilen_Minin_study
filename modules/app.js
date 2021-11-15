import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";

export default class App {
  #donateForm;
  #donateList;
  #mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
  ];

  constructor() {
    this.state = {
      donates: this.#mockDonates,
      totalAmount: 0,
    };
    this.#mockDonates.forEach((el) => (this.state.totalAmount += el.amount));
    this.#donateForm = new DonateForm(
      this.state.totalAmount,
      this.createNewDonate.bind(this)
    );
    this.#donateList = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
    this.state.donates.push(newDonate);
    this.#donateList.updateDonates(this.state.donates);
    this.state.totalAmount += newDonate.amount;
    this.#donateForm.updateTotalAmount(this.state.totalAmount);
  }
  run() {
    document.body.append(this.#donateForm.render(), this.#donateList.render());
  }
}
