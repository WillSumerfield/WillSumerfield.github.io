async function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    for (const el of elements) {
      const file = el.getAttribute("data-include");
      const res = await fetch(file);
      if (res.ok) {
        el.innerHTML = await res.text();
      } else {
        el.innerHTML = `<p style="color:red;">Could not load ${file}</p>`;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", includeHTML);