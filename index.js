$(document).ready(function () {
  let savedItems = localStorage.getItem("savedItems")
    ? parseInt(localStorage.getItem("savedItems"))
    : 0;

  // Update the displayed saved items count
  $("#saved-items-count").text(`Items saved: ${savedItems}`);

  // Handle saving items for later
  $(".save-for-later").click(function () {
    let item = $(this).data("item");
    savedItems++;

    // Update saved items count in localStorage and on the page
    localStorage.setItem("savedItems", savedItems);
    $("#saved-items-count").text(`Items saved: ${savedItems}`);

    alert(
      `${item} has been saved for later! You now have ${savedItems} items saved.`
    );
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
