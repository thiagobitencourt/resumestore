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
