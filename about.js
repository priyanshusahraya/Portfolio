const about_txt = document.querySelector("#about_txt");

document.querySelector("#about_txt").addEventListener("mouseout", function () {
  about_txt.classList.remove("shadow");
  about_txt.classList.add("no_shadow");
});

document.querySelector("#about_txt").addEventListener("mouseover", function () {
  about_txt.classList.remove("no_shadow");
  about_txt.classList.add("shadow");
});
