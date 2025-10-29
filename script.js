//your code here!

// Get the list element
const list = document.getElementById("infi-list");

// Function to add list items
function addItems(num) {
  const currentCount = list.children.length;
  for (let i = 1; i <= num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${currentCount + i}`;
    list.appendChild(li);
  }
}

// Add 10 items by default
addItems(10);

// Add scroll event listener
list.addEventListener("scroll", () => {
  // When user reaches near bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(2); // Add 2 more items
  }
});
