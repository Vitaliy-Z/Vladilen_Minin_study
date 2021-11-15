import { Settings as set } from "../core/constants/settings";
import { getFormattedTime as getTime } from "../core/utils";

export class DonateList {
  #donates;

  constructor(donates = []) {
    this.#donates = donates;
  }
  updateDonates(updatedDonates) {
    const donatesList = document.querySelector(".donates-container__donates");
    donatesList.innerHTML = "";
    updatedDonates.forEach((item) =>
      donatesList.append(this.#createDonateItem(item))
    );
  }
  #createTitle() {
    const title = document.createElement("h2");
    title.className = "donates-container__title";
    title.textContent = "Список донатов";
    return title;
  }
  #createDonateItem(item) {
    const donateItem = document.createElement("div");
    donateItem.className = "donate-item";
    const date = getTime(item.date);
    donateItem.innerHTML = `${date} - <b>${item.amount}${set.currency}</b>`;
    return donateItem;
  }
  #createDonateList() {
    const donateList = document.createElement("div");
    donateList.className = "donates-container__donates";
    this.#donates.forEach((item) =>
      donateList.append(this.#createDonateItem(item))
    );
    return donateList;
  }
  render() {
    const container = document.createElement("div");
    container.className = "donates-container";
    container.append(this.#createTitle(), this.#createDonateList());
    return container;
  }
}
