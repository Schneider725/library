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
    newDiv.setAttribute("class", "book");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const remove = document.createElement("button");

    remove.setAttribute("id","remove");
    remove.textContent = "remove book";
    remove.addEventListener("click", removeEntry);

    pOne.innerHTML = author.value;
    pTwo.innerHTML = title.value;
    pThree.innerHTML = pages.value
    newDiv.appendChild(pOne);
    newDiv.appendChild(pTwo);
    newDiv.appendChild(pThree);
    newDiv.appendChild(remove);

    books.appendChild(newDiv);
    author.value = "";
    title.value = "";
    pages.value = "";

}

function deleteBook() {
    const toDelete = books.lastElementChild;
    toDelete.remove();
}

function removeEntry() {
    const toDelete = this.parentElement;
    toDelete.remove();
}