// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Console.log the data from data.js
//console.log(data);

// Step 1: Loop through data and console.log each UFO sighting object
// data.forEach(function(ufoSight) {
//     console.log(ufoSight);
// });

//Step 2: Use d3 to append one table row tr for each UFO object
// data.forEach(function(ufoSight) {
//     console.log(ufoSight);
//     var row = tbody.append("tr");
// });

// Step 3: use the Object.entries to console.log each weather report value
// data.forEach(function(ufoSight) {
//     console.log(ufoSight);
//     var row = tbody.append("tr");

//     Object.entries(ufoSight).forEach(function([key, value]) {
//         console.log(key, value);
//     });
// });

// Step 4: use d3 to append 1 cell per UFO value (datetime, city, state, country, shape, durationMinutes, comments)
// data.forEach(function(ufoSight) {
//     console.log(ufoSight);
//     var row = tbody.append("tr");

//     Object.entries(ufoSight).forEach(function([key, value]) {
//         console.log(key, value);

//         var cell = tbody.append("td");
//     });
// });

// Step 5: use d3 to update each cell's text with ufo values
tableData.forEach(function(ufoSight) {
    console.log(ufoSight);
    var row = tbody.append("tr");

    Object.entries(ufoSight).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the submit button for search
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element 
    var inputValue = inputElement.property("value");

    console.log(inputValue)
    console.log(tableData);

    // Use the form input to filter the data
    var filteredData = tableData.filter(ufoSight => ufoSight.datetime === inputValue);

    console.log(filteredData);



    // Clear table 
    tbody.text("");

    // Display filtered data based on date input
    filteredData.forEach(function(ufoSight) {
        console.log(ufoSight);
        var row = tbody.append("tr");
    
        Object.entries(ufoSight).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
        });
    });


});

