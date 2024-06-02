"use strict";

// Grabbing some HTML elements to be used later
const movieTitleOut = document.getElementById("movie-title");
const releaseDateOut = document.getElementById("release-date");

// This is a JSON object that allows us to control various settings.
// This object will be used as an optional second parameter for the fetch method and is also where we insert our unique API key (Access Token Auth?)
const data = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      // My unique API key
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjRlOTczNWU5ZDgxNjhhYjRjM2QzYWEwMmRkYzIyMSIsInN1YiI6IjY2NWJmZjk3ODliYjliODIyNDViN2I4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9giC9MkcQEZbw8FQJwnzHvA1pooW5jQDvje9lt8IoEg",
  },
};

// The fetch method takes a single argument (the resource that we want to recieve) and a optional second argument, the JSON object that we created above: "data".
// This method does not directly return JSON data, rather it returns a response object.
// The response object is a representation of the entire HTTP response (it includes the JSON data as well as a bunch of other metadata that we don't need)
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  data
)
  // We then take this response object and extract the JSON data by using the json method
  .then((response) => response.json())
  .then((jsonData) => {
    // We can log this object to our console so we can check out the data
    console.log(jsonData);

    // Now we need to parse the JSON data and store the pieces into some variables so that we can easily use the data.
    let movieData = jsonData["results"];
    console.log(movieData);

    // movieData is a JSON object that stores a bunch of JSON objects containing information about the individual movie

    // We can now run a forEach loop on the JSON object "movieData" to pull whatever the info we need
    movieData.forEach((movie) => {
      // Grabbing the movie title. This is in Javascript string format.
      let movieTitle = movie["title"];
      console.log(movieTitle);
      movieTitleOut.innerHTML = movieTitle;
      // Grabbing the release date.
      let releaseDate = movie["release_date"];
      console.log(releaseDate);
      releaseDateOut.innerHTML = releaseDate;
    });
  })
  // I believe this is for error catching. Will need to ask Gaby
  .catch((err) => console.error(err));

// The HTML only shows the title and release date of the final movie right now cuz I got lazy but we'll fix that later :)
