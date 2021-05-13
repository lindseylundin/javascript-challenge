// // from data.js
// var tableData = data;

// // Use D3 to select the table body
// var tbody = d3.select("tbody");

// // forEach loop that populates table
// tableData.forEach((item) =>
// {
//     // row is created for table
//     var row = tbody.append('tr');

//     // Date/Time appended to row
//     row.append('td').text(item.datetime);
//     // City appended to row
//     row.append('td').text(item.city);
//     // State appended to row
//     row.append('td').text(item.state);
//     // Country appended to row
//     row.append('td').text(item.country);
//     // Shape appended to row
//     row.append('td').text(item.shape);
//     // Duration appended to row
//     row.append('td').text(item.durationMinutes);
//     // Comments appended to row
//     row.append('td').text(item.comments);
// }
// )




// FROM VIDEO
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

        var cell = tbody.append("td");
        cell.text(value);
    });
});