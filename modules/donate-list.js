export class DonateList {
  #donates;

  constructor(donates = []) {
    this.#donates = donates;
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
    donateItem.innerHTML = `${item.date} - <b>${item.amount}$</b>`;
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
