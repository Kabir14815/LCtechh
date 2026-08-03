(function () {
  const form = document.getElementById("standalone-contact-form");
  if (!form) return;

  const nameField = document.getElementById("contact-name-input-field");
  const emailField = document.getElementById("contact-email-input-field");
  const subjectField = document.getElementById("contact-subject-input-field");
  const messageField = document.getElementById("contact-message-input-field");
  const submitButton = document.getElementById("contact-submit-button");
  const statusEl = document.getElementById("contact-form-status");

  const fields = [
    {
      input: nameField,
      container: document.getElementById("contact-name-input"),
      validate: (value) => value.trim().length >= 4,
    },
    {
      input: emailField,
      container: document.getElementById("contact-email-input"),
      validate: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.trim()),
    },
    {
      input: messageField,
      container: document.getElementById("contact-message-input"),
      validate: (value) => value.trim().length >= 10,
    },
  ];

  const setStatus = (message, type) => {
    statusEl.textContent = message;
    statusEl.classList.remove("is-success", "is-error");
    if (type) statusEl.classList.add(type);
  };

  const hideError = (field) => {
    field.container.classList.remove("error-container");
    const label = field.container.querySelector(".error-label");
    if (label) label.classList.add("hide");
  };

  const showError = (field) => {
    field.container.classList.add("error-container");
    const label = field.container.querySelector(".error-label");
    if (label) label.classList.remove("hide");
  };

  fields.forEach((field) => {
    field.input.addEventListener("input", () => hideError(field));
    field.input.addEventListener("focus", () => hideError(field));
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    fields.forEach(hideError);
    setStatus("");

    let valid = true;
    fields.forEach((field) => {
      if (!field.validate(field.input.value)) {
        showError(field);
        valid = false;
      }
    });
    if (!valid) return;

    submitButton.disabled = true;
    setStatus("Sending…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameField.value.trim(),
          email: emailField.value.trim(),
          message:
            (subjectField.value.trim()
              ? `Subject: ${subjectField.value.trim()}\n\n`
              : "") + messageField.value.trim(),
        }),
      });

      if (Math.floor(response.status / 100) === 2) {
        form.reset();
        setStatus("Your message has been sent. We'll get back to you soon.", "is-success");
      } else {
        setStatus("Something went wrong. Please try again or email us directly.", "is-error");
      }
    } catch (error) {
      setStatus("Network error. Please try again or call 9306110677.", "is-error");
    } finally {
      submitButton.disabled = false;
    }
  });
})();
