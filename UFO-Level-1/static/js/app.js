// from data.js
var tableData = data;
console.log(tableData);

//Reference Table Body
var tbody = d3.select("tbody");

//UFO Sightings Value
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    //Append Each UFO Sighting
    var row = tbody.append("tr");

    //Use 'Object.entires' to Log UFO Sightings
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        //Append to Row
        var cell = row.append("td");
        cell.text(value);
    });
});

//Button Select
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

    //Input Data Selection
    var inputElement = d3.select("#datetime");
    //Define Data Value Property
    var inputValue = inputElement.property("value");
    //Log Date Value
    console.log(inputValue);
    //filter Data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    //Log Filter Values
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    
    console.log(selections);
    //Append Each UFO Sighting Object
    var row = tbody.append("tr");
    //Use 'Object.entries to log UFO Sightings
    Object.entries(selections).forEach(function([key, value]){
        console.log(key, value);
        //Append to Row
        var cell = row.append("td");
        cell.text(value);
    });

});
});
