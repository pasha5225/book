function select(b) {
    var button = b;
    var parent = button.parentElement;

    var bookname = parent.childNodes.item(3);

    var inputBookName = document.querySelector('#fname')
    inputBookName.value = bookname.innerText;
}