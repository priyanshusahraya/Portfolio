let flag = 1;

if (flag == 1) {
  flag += 1;
  document
    .getElementById("skill_head")
    .addEventListener("mouseover", function () {
      location.reload();
    });
}

if (flag != 1) {
  document.getElementById("skill").addEventListener("mouseout", function () {
    flag += flag;
  });
}

const topics = ["html", "css", "js", "py", "cpp", "sql", "git", "react"];

topics.forEach((topic) => {
  const element = document.querySelector(`#${topic}`);
  const zoomInClass = "zoom_in_skill";
  const zoomOutClass = "zoom_out_skill";

  element.addEventListener("mouseover", function () {
    element.classList.remove(zoomOutClass);
    element.classList.add(zoomInClass);
  });

  element.addEventListener("mouseout", function () {
    element.classList.remove(zoomInClass);
    element.classList.add(zoomOutClass);
  });
});
