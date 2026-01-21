document.getElementById("year").textContent = new Date().getFullYear();

const leadForm = document.getElementById("leadForm");

leadForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const appLink = document.getElementById("appLink").value.trim();
  const notes = document.getElementById("notes").value.trim();

  // For now - simple demo alert
  alert(
    `✅ Request Submitted!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nApp Link: ${appLink}\n\nWe will contact you soon.`
  );

  leadForm.reset();
});
