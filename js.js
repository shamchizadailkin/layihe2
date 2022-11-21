const inputItem = document.getElementById("toDoItem");
const addBtn = document.getElementById("addToListBtn");
const clearInput = document.getElementById("clearInputBtn");
const listItems = document.getElementById("listItems");
const sortBtn = document.getElementById("orderListBtn")
const removeItemBtn = document.getElementsByClassName("removeItemBtn");




addBtn.addEventListener("click", (e) => {
    if (inputItem.value == "") {
        alert("Please fill the input");
    }
    else {
      
                
        listItems.style.display = "block";
            

        const newItemDiv = document.createElement("div");

        const newItem = document.createElement("p");
        newItem.innerHTML = inputItem.value;

        const newItemBtn = document.createElement("button");
        newItemBtn.innerHTML = "✕";


        const btnDiv = document.createElement("div");

        listItems.append(newItemDiv);
        newItemDiv.append(newItem);

        newItemDiv.append(btnDiv);
        //newItemBtn.append(btnDiv);

        btnDiv.append(newItemBtn);

        newItemDiv.classList.add("listItem");
        newItemDiv.setAttribute("data-ordered", inputItem.value);
        newItemBtn.setAttribute("class", "removeItemBtn");
        btnDiv.setAttribute("class", "removeBtnDiv");
        newItem.setAttribute("class", "newItemInnerTxt");

        inputItem.value = "";


        removeBtns = [...removeItemBtn]
        console.log(removeBtns.length)

        removeBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                item.parentNode.parentNode.remove();
                if (listItems.childNodes.length  === 0) {
                    listItems.style.display = "none";
                    console.log("hello");
                }
                else {
                    listItems.style.display = "block";
                }
            });

        })


    }

});

clearInput.addEventListener("click", (e) => {
    e.preventDefault();
    inputItem.value = "";
});

sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    function comparator(a, b) {
        if (a.dataset.ordered < b.dataset.ordered)
            return -1;
        if (a.dataset.ordered > b.dataset.ordered)
            return 1;
        return 0;
    }


    function SortData() {
        var itemDivs =
            document.querySelectorAll("[data-ordered]");
        var itemArr = Array.from(itemDivs);
        let sorted = itemArr.sort(comparator);
        sorted.forEach(e =>
            document.querySelector("#listItems").
                appendChild(e));
    }
    SortData();



});



