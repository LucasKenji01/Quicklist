const addInput = document.getElementById("addInput");
const addButton = document.getElementById("addButton");
const lista = document.querySelector(".list ul");
const main = document.querySelector("main");

addButton.addEventListener('click', addItem);

function addItem(event) {
  event.preventDefault();
  const li = document.createElement("li");
  li.classList.add("item__lista");
  lista.appendChild(li);

  const divLeftSide = document.createElement("div");
  divLeftSide.classList.add("left-side__item");
  li.appendChild(divLeftSide);

  const divCheckbox = document.createElement("div");
  divCheckbox.classList.add("checkbox");
  divLeftSide.appendChild(divCheckbox);

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("id", `${addInput.value}`);
  inputCheckbox.classList.add("checkbox__input");

  const labelCheckbox = document.createElement("label");
  labelCheckbox.setAttribute("for", `${addInput.value}`);
  labelCheckbox.classList.add("checkbox__text");
  divCheckbox.append(inputCheckbox, labelCheckbox);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete__button");
  li.appendChild(deleteButton);

  const imgDelete = document.createElement("img");
  imgDelete.setAttribute("src", "./img/button.svg");
  imgDelete.setAttribute("alt", "icon delete");
  deleteButton.appendChild(imgDelete);

  labelCheckbox.textContent = addInput.value;

  addInput.value = "";

  deleteButton.addEventListener("click", removeItem);
}

function removeItem() {
  const li = this.parentElement;
  li.remove();

  showAlert();
}

function showAlert() {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  main.appendChild(alert);

  const divLeftSideAlert = document.createElement("div");
  divLeftSideAlert.classList.add("left-side__alert");
  alert.appendChild(divLeftSideAlert);

  const imgWarning = document.createElement("img");
  imgWarning.setAttribute("src", "./img/Icon.svg");
  imgWarning.setAttribute("alt", "icon warning");
  divLeftSideAlert.appendChild(imgWarning);

  const textAlert = document.createElement("p");
  textAlert.classList.add("text__alert");
  textAlert.textContent = "O item foi removido da lista";
  divLeftSideAlert.appendChild(textAlert);

  const buttonAlert = document.createElement("button");
  buttonAlert.classList.add("close__alert");
  alert.appendChild(buttonAlert);

  const imgCloseAlert = document.createElement("img");
  imgCloseAlert.setAttribute("src", "./img/delete-small.svg");
  imgCloseAlert.setAttribute("alt", "icon close");
  buttonAlert.appendChild(imgCloseAlert);

  buttonAlert.addEventListener("click", closeAlert);

  setTimeout(() => {
    alert.remove();
  }, 2000);

}

function closeAlert() {
  const alert = this.parentElement;
  alert.remove();
}
