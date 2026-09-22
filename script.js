const list = document.getElementById("infi-list");

let count = 1;

// Add a list item
function addItems(number) {
  for (let i = 0; i < number; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item " + count;
    list.appendChild(li);
    count++;
  }
}

// Add 10 items initially
addItems(10);

// Add 2 more items when reaching the bottom
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(2);
  }
});