const box = document.querySelector('.box');
const btnAdd = document.querySelector('.add');

let count = 1;


btnAdd.onclick = function () {
    const item = document.createElement('div');

    item.className = 'item';
    item.innerHTML = count;

    item.onclick = function () {
        const items = document.querySelectorAll('.item');
        const curElement = this;

        items.forEach(function (el) {
            if (curElement !== el) {
                el.classList.remove('active');
            }
        });
        this.classList.toggle('active');

        const selected = document.querySelector('.selected');
        const spanLast = selected.lastElementChild;
        spanLast.innerHTML = curElement.innerHTML;
    }
    count++
    box.append(item);
}

const boxItems = box.childNodes;

// ------------- BTN DELETE --------------//

const btnDel = document.querySelector('.del');

btnDel.onclick = function () {

    for (let i = 0; i < boxItems.length; i++) {
        if (boxItems[i].classList.contains('active')) {
            boxItems[i].remove()
        }
    }
}

// ------------------ BTN Before ------------------ //

const btnBefore = document.querySelector('.before');

btnBefore.onclick = function () {
    const items = document.querySelectorAll('.item');

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
            const clone = items[i].cloneNode(true);
            clone.onclick = items[i].onclick;
            items[i].before(clone);
            clone.classList.remove('active')
            clone.innerHTML = `${items[i].innerHTML}-c`
        }
    }
}
// ------------------------- BTN After --------------- //

const btnAfter = document.querySelector('.after');

btnAfter.onclick = function () {
    const items = document.querySelectorAll('.item');

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
            const clone = items[i].cloneNode(true);
            clone.onclick = items[i].onclick;
            items[i].after(clone);
            clone.classList.remove('active')
            clone.innerHTML = `${items[i].innerHTML}-c`
        }
    }
}
