const d = document,
  regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  $form = d.getElementById("form"),
  $email = d.getElementById("email"),
  $iconError = d.getElementById("icon-error"),
  $messageError = d.getElementById("message-error");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (regex.test($email.value)) {
    $iconError.classList.remove("error");
    $messageError.classList.remove("error");
    $email.classList.remove("input-error");
    $email.value = "";
  } else {
    $iconError.classList.add("error");
    $messageError.classList.add("error");
    $email.classList.add("input-error");
  }
})
