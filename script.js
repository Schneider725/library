const addBook = document.getElementById("addBook");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const submit = document.getElementById("submit");
const books = document.getElementById("books");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const removeBook = document.getElementById("removeBook");

[author, title, pages].forEach((input) => {
    input.addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            submitBook();
        }
    })
})

addBook.addEventListener("click", () => {
    modal.showModal();
});
close.addEventListener("click", () => {
    modal.close();
});

submit.addEventListener("click", toLibrary);
submit.addEventListener("click", submitBook);

removeBook.addEventListener("click", deleteBook);

function submitBook() {
    if(author.checkValidity() === false  || title.checkValidity() === false || pages.checkValidity() == false){
        return
    }
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "book");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const check = document.createElement("input")
    const remove = document.createElement("button");

    check.setAttribute("type", "checkbox");
    check.textContent = "read?";

    remove.setAttribute("id", "remove");
    remove.textContent = "remove book";
    remove.addEventListener("click", removeEntry);

    pOne.innerHTML = author.value;
    pTwo.innerHTML = title.value;
    pThree.innerHTML = pages.value
    newDiv.appendChild(check);
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
    if (myLibrary.length > 0) {
        myLibrary.splice(myLibrary.length - 1, 1);
    }
    toDelete.remove();
}

function removeEntry() {
    const toDelete = this.parentElement;
    const index = Array.from(books.children).indexOf(toDelete);
    if (index > -1) {
        myLibrary.splice(index, 1);
    }
    toDelete.remove();
}

const myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function toLibrary() {
    const book1 = new Book(author.value, title.value, pages.value);
    myLibrary.push(book1);
}