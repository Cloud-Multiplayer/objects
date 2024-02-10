for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
}
for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000) {
        alert("The loop is done!");
    }
}
var favoriteShows = ["The Mandalorian", "WandaVision", "Daredevil", "Masters of the Air", "For All Mankind"];

for (let i = 0; i < favoriteShows.length; i++) {
    console.log("My #" + (i+1) + " favorite TV show is " + favoriteShows[i]);
}
