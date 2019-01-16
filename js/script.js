/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    //"24 Karat Magic",
    //"Nice For What",
    //"Universe",
    "Never gonna give you up",
    "Shelter",
    //"???",
    "scarborough fair"
];


// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

var author =[
    //"Bruno Mars",
    //"Drake",
   // "",
    "Rick Astley",
    "Porter Robinson & Madeon",
    //"pl",
    "Celtic Woman"
    ];

var length =[
    //"",
    //"???",
    //"???",
    "3:33",
    "3:38",
    //"???",
    "3:12"
    ];

var image =[
   // "https://via.placeholder.com/200x100?",
    //"???",
    //"???",
    "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    "https://i1.wp.com/edmidentity.com/wp-content/uploads/2016/11/14691934_1238097526248835_8490368168169072203_o.png.jpg?resize=696%2C392&ssl=1",
    //"https://via.placeholder.com/200x100",
    "http://3.bp.blogspot.com/_tclVWoIfw94/SbHtwBwjqHI/AAAAAAAAAF4/zI-cJTNSIDU/s320/medieval+fair.jpg",
    //"https://via.placeholder.com/200x100"
    ];
    
var link=[
    //"https://via.placeholder.com/200x100",
    //"https://via.placeholder.com/200x100",
    //"https://via.placeholder.com/200x100",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=fzQ6gRAEoy0",
    //"https://via.placeholder.com/200x100",
    "https://www.youtube.com/watch?v=wiZJP_XLmrQ"
    ];

function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append(`<p class="appendedDiv"> ${song} </p>`); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    
    
    
    
    //-----------------------------------------
    image.forEach(function(pic) {
        $("#images").append(`<img class="appendedDiv" src='${pic}'>`); 
    });
    //-----------------------------------------
    author.forEach(function(artists) {
        $("#artists").append(`<p class="appendedDiv"> ${artists} </p>`); 
    });
    //-----------------------------------------
    length.forEach(function(lengths) {
        $("#lengths").append(`<p class="appendedDiv"> ${lengths} </p>`); 
    });
    //-----------------------------------------
    link.forEach(function(link) {
        $("#links").append(`<a class="appendedDiv songLink" href='${link}' target="_blank">link</a>`); 
    });
    

    
    
}

//empty ---------------------------------------------
function emptySongInfo(){
    $(".column").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    //var songName = $("#song").val();
    songs.push($("#song").val());
    // BELOW write the code to add new items to each of the other arrays
    image.push($("#image").val());
    author.push($("#artist").val());
    link.push($("#link").val());
    length.push($("#length").val());


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
