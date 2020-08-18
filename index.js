(function init () {
    renderListItems();
})();

function createListItem(name) {
    return '<li>' + name + '</li>';
}

function renderListItems() {
    if(data && data.length) {
        let listItem = data.map(item=> createListItem(item.name)).join('');
        let parent = document.getElementById("listItems");
        parent.innerHTML = listItem;
    } 
}

