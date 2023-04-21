let button = document.getElementsByClassName("button")[0];
let container = document.getElementById("toDoContainer");
let input = document.getElementById("pretrazivac");
button.addEventListener("click", function () {
  const textList = input.value;
  const cerateLi = document.createElement(`li`);
  const deleteButton = document.createElement(`button`);
  cerateLi.innerText = textList;
  deleteButton.innerText = `Delete`;
  deleteButton.addEventListener(`click`, deletebtn);

  function deletebtn(e) {
    cerateLi.remove();

    cerateLi.append(deleteButton);
    lista.append(cerateLi);
    input.value = "";
  }
});
