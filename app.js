"use strict";
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

const form = document.getElementById("form");

let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  createBook() {
    const container = document.createElement("div");
    container.className = "book-card";
    container.innerHTML = `
        <p class="book-title">${this.title}</p>
        <p class="book-author">${this.author}</p>
        <p class="book-pages">${this.pages}</p>
        <button class="btn">${this.isRead}</button>
        <button class="btn" id="remove">Remove</button>
      `;
    document.getElementById("grid").appendChild(container);
  }
}

//Modals
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

const submit = form.addEventListener("submit", function (event) {
  event.preventDefault(); //Prevents the form from submmitting
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.querySelector('[type="checkbox"]').checked
    ? "Read"
    : "Unread";

  const newEntry = new Book(title, author, pages, isRead);

  newEntry.createBook();
});
