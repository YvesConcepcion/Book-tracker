"use strict";
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

const form = document.getElementById("form");

let myLibrary = [];

const submit = form.addEventListener("submit", function (event) {
  event.preventDefault(); //Prevents the form from submmitting
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var isRead = document.getElementById("is-read").checked;

  var book = new Book(title, author, pages, isRead);

  myLibrary.push(book);
});

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
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

var divBook = document.createElement("div");
divBook.setAttribute("id", "new-book");

/*
TODO LIST
1. Use array data to create new book elements
2. IF Submit is clicked = >
3. Create new div with class of book-card
4. Place div inside the books-grid div
4. Add P element inside the div element with a class of title
    add the book title to the P element
5. Add P element inside the div element with a class of author
    add the book author to the P element
6. Add P element inside the div element with a class of pages
    add the book pages inside the div element
7. add Button element with "read-status" class
    add read 
8. add button element with "remove" class
    add remove
9. close the modal
    disable overlay 
    set active to 0
*/
