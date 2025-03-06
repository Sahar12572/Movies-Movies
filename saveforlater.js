$(document).ready(function () {
  // Initialize savedItems from localStorage or as an empty array if not found
  let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Display the saved items on the page
  if (savedItems.length > 0) {
    savedItems.forEach(function (item) {
      $("#saved-items").append(`<p>${item}</p>`);
    });
  } else {
    $("#saved-items").append("<p>No items saved yet.</p>");
  }

  // Handle saving items for later
  $(".save-for-later").click(function () {
    let item = $(this).data("item");

    // Add the item to the savedItems array
    savedItems.push(item);

    // Update localStorage
    localStorage.setItem("savedItems", JSON.stringify(savedItems));

    // Optionally, you can display a message confirming the item was saved
    alert(`${item} has been saved for later!`);
  });
});
