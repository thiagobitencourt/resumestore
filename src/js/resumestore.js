// var list = [1, 2, 3, 4];

// list.push(5);
// console.log(list);

// list.unshift(6);
// console.log(list);

// list.pop();
// console.log(list);

// list.shift();
// console.log(list);

// list.splice(1, 1, 16);
// console.log(list);

function filterClicked() {
    var advancedFilter = document.getElementById("advanced-filter");
    var advancedFilterClasses = advancedFilter.className.split(" ");

    var hiddenClassIndex = advancedFilterClasses.indexOf("hidden");
    if(hiddenClassIndex == -1) {
        advancedFilterClasses.push("hidden");
    } else {
        advancedFilterClasses.splice(hiddenClassIndex, 1);
    }

    var novasClasses = advancedFilterClasses.join(" ");
    advancedFilter.className = novasClasses;
}

// inputSearch.onchange = function(event) {
//     alert(event.target.value);
//     console.log("O texto da busca mudou!");
// }

// var logo = document.getElementsByClassName("logo");
// console.log(logo);

// var headerSearch = document.querySelectorAll("header.search");
// console.log(headerSearch);
