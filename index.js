const shoppingListItem = (itemName) => {
    return `<li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
    </li>`;
}

$("#js-shopping-list-form").submit(function (event) {
    event.preventDefault();
    const itemVal = $("#shopping-list-entry").val();
    if (itemVal) {
        $(".shopping-list").append(shoppingListItem(itemVal));
        $("#shopping-list-entry").val('')
    } else {
        alert("Item name is required")
    }
});

$("body").on("click", ".shopping-item-toggle", function (event){
    $(event.currentTarget).parent().prev().toggleClass('shopping-item__checked')
});

$("body").on("click", ".shopping-item-delete", function (event) {
    $(event.currentTarget).parent().parent().remove();
});
