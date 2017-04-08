var search = $("#searchTermInput").val().trim();
var recordsRetrieve = $("#retrieveRecordsInput").val().trim();
var startYear = $("#startYearInput").val().trim();
var endYear = $("#endYearInput").val().trim();

var authKey = "ef64250c6403470c9dbc1a5b44250ab8";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + search;

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "ef64250c6403470c9dbc1a5b44250ab8"
// });

$("#search").on('click')function

$.ajax({
  url: queryURL,
  method: 'GET',
}).done(function(result) {
  console.log(result);


  for (var i = 0; i < 5; i++) {

  //   var div = $("<div>");
  //
  //   var p = $("<p>").text();
  //
  //   var personImage = $("<img>");
  //   personImage.attr("src", results[i].images.fixed_height.url);
  //
  //   gifDiv.prepend(p);
  //   gifDiv.prepend(personImage);
  //
  //   $("#gifs-appear-here").prepend(gifDiv);
  //
  // }).fail(function(err) {
  //   throw err;
  });
  }
});
