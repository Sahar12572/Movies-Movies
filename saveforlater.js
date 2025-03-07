$(document).ready(function () {
  // Retrieve saved items from localStorage or initialize an empty array
  let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Function to display saved items
  function displaySavedItems() {
    $("#saved-items").empty(); // Clear previous content
    if (savedItems.length > 0) {
      savedItems.forEach(function (item) {
        $("#saved-items").append(`<p>${item}</p>`);
      });
    } else {
      $("#saved-items").append("<p>No items saved yet.</p>");
    }
  }

  // Initial display of saved items
  displaySavedItems();
});
