const orderCount = document.getElementById("order-count");
const toast = document.getElementById("toast");
let count = 0;
let toastTimer = null;

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
};

const updateCount = () => {
  orderCount.textContent = count.toString();
};

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    updateCount();
    const name = button.getAttribute("data-add");
    showToast(`Added ${name}.`);
  });
});

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-scroll");
    const node = document.querySelector(target);
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const orderNow = document.getElementById("order-now");
orderNow.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.scrollIntoView({ behavior: "smooth" });
  }
});
