export class DonateForm {
  constructor(totalAmount, createNewDonate) {
    this.totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;
  }

  updateTotalAmount(newAmount) {
    const total = document.querySelector("#total-amount");
    total.textContent = `${newAmount}$`;
  }
  #createForm() {
    const form = document.createElement("form");
    form.className = "donate-form";
    form.append(this.#createTitle(), this.#createLabel(), this.#createButton());

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.createNewDonate({
        amount: Number(e.target.amount.value),
        date: new Date(),
      });
      e.target.amount.value = "";
    });
    return form;
  }
  #createTitle() {
    const title = document.createElement("h1");
    title.id = "total-amount";
    title.textContent = `${this.totalAmount}$`;
    return title;
  }
  #createLabel() {
    const label = document.createElement("label");
    label.className = "donate-form__input-label";
    label.textContent = "Введите сумму в $";
    label.append(this.#createInput());
    return label;
  }
  #createInput() {
    const input = document.createElement("input");
    input.className = "donate-form__donate-input";
    input.setAttribute("name", "amount");
    input.setAttribute("type", "number");
    input.setAttribute("max", "100");
    input.setAttribute("min", "0");
    input.setAttribute("required", "");
    return input;
  }
  #createButton() {
    const button = document.createElement("button");
    button.className = "donate-form__submit-button";
    button.setAttribute("type", "submit");
    button.textContent = "Задонатить";

    return button;
  }

  render() {
    return this.#createForm();
  }
}
