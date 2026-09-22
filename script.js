//your code here!
const list = document.getElementById("list");

let count = 1;


// Add a list item
function addItem() {
  const li = document.createElement("li");

  li.textContent = "List Item " + count;

  list.appendChild(li);

  count++;
}


// Add 10 items by default
for (let i = 0; i < 10; i++) {
  addItem();
}


// Add 2 more items when user reaches the bottom
window.addEventListener("scroll", function () {

  const scrollPosition =
    window.innerHeight + window.scrollY;

  const pageHeight =
    document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 5) {

    addItem();
    addItem();

  }

});
