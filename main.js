const btn = document.querySelector('input[name="add-item"]');
const itemList = document.querySelector("div.item-list ul");
const removeMark = document.querySelectorAll("i");

itemList.addEventListener("click", function(ev) {
  if (ev.target.nodeName === "LI") {
    ev.target.classList.add("done");
  }
});

itemList.addEventListener("click", function(ev) {
  if (ev.target.nodeName === "I") {
    ev.target.parentNode.remove();
  }
});

btn.addEventListener("click", () => {
  let inputValue = document.getElementById("text").value;
  if (inputValue == "") {
    return alert("Wartość jest pusta!");
  }

  const newLi = document.createElement("li");
  itemList.appendChild(newLi);
  newLi.append(inputValue);
  document.getElementById("text").value = "";
  const createTimes = document.createElement("i");
  newLi.appendChild(createTimes).classList.add("fas", "fa-times");
});
