const head = document.querySelector("#getInTouch");

document
  .querySelector(".contact_text")
  .addEventListener("mouseover", function () {
    head.classList.remove("zoom_out_head");
    head.classList.add("zoom_in_head");
  });

document
  .querySelector(".contact_text")
  .addEventListener("mouseout", function () {
    head.classList.remove("zoom_in_head");
    head.classList.add("zoom_out_head");
  });
