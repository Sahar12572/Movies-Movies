$(document).ready(function () {
  // Ensure savedItems is always an array (use an empty array if null or undefined)
  let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Update the displayed saved items count
  $("#saved-items-count").text(`Items saved: ${savedItems.length}`);

  // Handle saving items for later
  $(".save-for-later").click(function () {
    let item = $(this).data("item");
    console.log("Button clicked, item:", item); // Debugging: Check if the item is retrieved

    // Ensure savedItems is an array
    if (!Array.isArray(savedItems)) {
      savedItems = []; // If it's not an array, reset it
    }

    // Check if the item is already saved
    if (!savedItems.includes(item)) {
      savedItems.push(item);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      $("#saved-items-count").text(`Items saved: ${savedItems.length}`);
      alert(
        `${item} has been saved for later! You now have ${savedItems.length} items saved.`
      );
    } else {
      alert(`${item} is already saved!`);
    }
  });

  // Like functionality with animation
  $(".like-btn").click(function () {
    alert("You liked this item!");
    $(this).fadeOut(500).fadeIn(500); // Chained animation effects
  });

  // Comment form submission
  $("#comment-form").submit(function (event) {
    event.preventDefault();
    let comment = $(this).find("textarea").val();
    if (comment) {
      alert("Comment submitted: " + comment);
    }
  });

  // Dropdown menu functionality
  $(".dropdown-btn").click(function () {
    $(this).next(".dropdown-content").toggle();
  });

  // Hide/Show function with fadeIn/fadeOut effect on images
  $(".image-container img").click(function () {
    $(this).fadeOut(500).fadeIn(500); // Chained hide/show effects
  });
});
