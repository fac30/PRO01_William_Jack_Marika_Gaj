function confirmMessage(event) {
  event.preventDefault();
  alert("Message has been sent!");

  document.getElementById("contact-first-name").value = "";
  document.getElementById("contact-last-name").value = "";
  document.getElementById("contact-email").value = "";
  document.getElementById("contact-message").value = "";
}

export default confirmMessage;
