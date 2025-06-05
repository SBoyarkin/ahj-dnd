export class ColumnWidget {
  constructor(el) {
    this.title = ["TODO", "IN PROGRESS", "DONE"];
    this.el = el;
  }

  createCol(el) {
    this.title.forEach((e) => {
      const column = document.createElement("div");
      column.id = e;
      column.classList.add("column");
      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = e;

      const addBtn = document.createElement("div");
      addBtn.classList.add("add-btn");
      addBtn.textContent = "+ Add another card";

      const addItem = document.createElement("div");
      addItem.classList.add("addItem");
      addItem.appendChild(addBtn);
      column.append(title, addItem);

      this._createLocalStorage(e);
      this.el.append(column);

      column.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-btn")) {
          column.append(this._createInput());
          addBtn.remove();
        }
      });
      console.log(e);
    });
    return "";
  }

  _createInput() {
    const element = document.createElement("div");
    element.classList.add("input");
    const textInput = document.createElement("input");
    textInput.classList.add("text-input");
    const dFlex = document.createElement("div");
    dFlex.classList.add("d-flex");
    const gBtn = document.createElement("div");
    gBtn.classList.add("g-btn");
    gBtn.textContent = "add card"
    gBtn.te
    const closesBtn = document.createElement("div");
    closesBtn.classList.add("closes-btn");
    dFlex.append(gBtn, closesBtn);

    element.append(textInput, dFlex);
    return element;
  }

  createItem() {
    const item = document.createElement("div");
    item.id = crypto.randomUUID();
    item.classList.add("column-item");
  }

  removeItem() {}

  _createLocalStorage(key) {
    if (key in localStorage) {
      console.log("Ключ уже существует:", key);
    } else {
      localStorage.setItem(key, JSON.stringify([]));
      console.log("Ключ создан:", key);
    }
  }
}
