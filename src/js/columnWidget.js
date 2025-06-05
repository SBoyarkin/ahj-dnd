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
      console.log(e);
    });
    return "";
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
