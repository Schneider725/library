const addBook = document.getElementById("addBook");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const submit = document.getElementById("submit");
const books = document.getElementById("books");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const removeBook = document.getElementById("removeBook");
addBook.addEventListener("click", () => {
    modal.showModal();
});
close.addEventListener("click", () => {
    modal.close();
});
submit.addEventListener("click", submitBook);

removeBook.addEventListener("click", deleteBook);

function submitBook() {
    const newDiv = document.createElement("div");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    pOne.innerHTML = author.value;
    pTwo.innerHTML = title.value;
    pThree.innerHTML = pages.value
    newDiv.appendChild(pOne);
    newDiv.appendChild(pTwo);
    newDiv.appendChild(pThree);

    books.appendChild(newDiv);
}

function deleteBook() {
    const toDelete = books.lastChild;
    toDelete.remove();
}
