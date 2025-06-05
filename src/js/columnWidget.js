export class ColumnWidget {
  constructor(el) {
    this.title = ["TODO", "IN PROGRESS", "DONE"];
    this.el = el;
  }

  createCol(el) {
    this.title.forEach((e) => {
      const column = document.createElement("div");
      column.classList.add("column");
      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = e;
      const addItem = document.createElement("div");
      addItem.classList.add("addItem");
      (addItem.innerHTML =
        '       <div class="add-btn"> + Add another card</div>\n' +
        '       <div class="input">\n' +
        '         <input class="text-input" type="text">\n' +
        '         <div class="d-flex">\n' +
        '           <div class="g-btn">Add Card</div>\n' +
        '           <div class="closes-btn"></div>\n' +
        "         </div>\n" +
        "       </div>\n" +
        "     </div>"),
        column.append(title);
      column.append(addItem);
      this.el.append(column)
    });
  }
}
