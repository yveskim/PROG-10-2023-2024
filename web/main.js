// Object Handler
class Phone {
  constructor(model, brand, ram, rom) {
    this.model = model;
    this.brand = brand;
    this.ram = ram;
    this.rom = rom;
  }
}

// Store Data

// User Interface Handler
class ui {
  static storedPhone() {
    fetch("./storePhone.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const phones = data.samplePhone;
        phones.forEach((phone) => ui.displayPhoneToTable(phone));
      });
  }

  static displayPhoneToTable(phone) {
    const phoneTable = document.querySelector("#phoneTable");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${phone.model}</td>
      <td>${phone.brand}</td>
      <td>${phone.ram}</td>
      <td>${phone.rom}</td>
    `;
    phoneTable.appendChild(row);
  }
}
// Display Data
ui.storedPhone();

// Remove Data
