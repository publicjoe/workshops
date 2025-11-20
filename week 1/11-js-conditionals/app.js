// Check the value stored in an age variable against the movie ratings provided.
// The UK ratings are U, PG, 12, 15, and 18.
// Write a set of if, if else, and else statements to log out whether someone is allowed in to the cinema to watch a movie.

const age = 10;
const movieRating = "U";

if (age > 17) {
    console.log(`You can watch a movie rated`, movieRating);
} else if (age > 14 && age < 18) {
  if (movieRating === "18") {
    console.log(`You can NOT watch a movie rated`, movieRating);
  } else {
    console.log(`You can watch a movie rated`, movieRating);
  }
} else if (age > 11 && age < 15) {
  if ((movieRating === "15") || (movieRating === "18")) {
    console.log(`You can NOT watch a movie rated`, movieRating);
  } else {
    console.log(`You can watch a movie rated`, movieRating);
  }
} else if (age < 12) {
  if ((movieRating === "12") || (movieRating === "15") || (movieRating === "18")) {
    console.log(`You can NOT watch a movie rated`, movieRating);
  } else {
    console.log(`You can watch a movie rated`, movieRating);
  }
}
