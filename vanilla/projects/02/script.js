const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonsShowModal = document.querySelectorAll(".show-modal");

const showModal = () => {
    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
}

const closeModal = () => {
    if (!modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
}

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < buttonsShowModal.length; i++) {
    buttonsShowModal[i].addEventListener("click", showModal);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});