// const inp_name = document.querySelector("#name_head");
// const inp_email = document.querySelector("#email_head");
// const inp_msg = document.querySelector("#msg_head");

// document.querySelector("#name_fld").addEventListener("mouseover", function () {
//   inp_name.classList.remove("hidden");
//   inp_name.classList.remove("zoom_out");
//   inp_name.classList.add("zoom_in");
// });

// document.querySelector("#name_fld").addEventListener("mouseout", function () {
//   inp_name.classList.add("hidden");
//   inp_name.classList.remove("zoom_in");
//   inp_name.classList.add("zoom_out");
// });

// document.querySelector("#email_fld").addEventListener("mouseover", function () {
//   inp_email.classList.remove("hidden");
//   inp_email.classList.remove("zoom_out");
//   inp_email.classList.add("zoom_in");
// });

// document.querySelector("#email_fld").addEventListener("mouseout", function () {
//   inp_email.classList.add("hidden");
//   inp_email.classList.remove("zoom_in");
//   inp_email.classList.add("zoom_out");
// });

// document.querySelector("#msg_fld").addEventListener("mouseover", function () {
//   inp_msg.classList.remove("hidden");
//   inp_msg.classList.remove("zoom_out");
//   inp_msg.classList.add("zoom_in");
// });

// document.querySelector("#msg_fld").addEventListener("mouseout", function () {
//   inp_msg.classList.add("hidden");
//   inp_msg.classList.remove("zoom_in");
//   inp_msg.classList.add("zoom_out");
// });

const fields = [
  { id: "name_fld", input: "name_head" },
  { id: "email_fld", input: "email_head" },
  { id: "msg_fld", input: "msg_head" },
];

fields.forEach((field) => {
  const inputElement = document.querySelector(`#${field.input}`);
  const fieldElement = document.querySelector(`#${field.id}`);

  fieldElement.addEventListener("mouseover", () => {
    inputElement.classList.remove("hidden", "zoom_out_form");
    inputElement.classList.add("zoom_in_form");
  });

  fieldElement.addEventListener("mouseout", () => {
    inputElement.classList.add("hidden", "zoom_out_form");
    inputElement.classList.remove("zoom_in_form");
  });
});
