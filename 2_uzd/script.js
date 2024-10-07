const exercises = [
  `Push-ups`,
  `Sit-ups`,
  `Bear Crawls`,
  `1 mile run`,
  `60 second plank`,
  `Burpees`,
  `Jumping Jacks`,
  `Squats`,
  `Weighted Squats`,
  `Inch Worms`,
];

let randomExercises = (a) => {
  if (0 < a) {
    console.log(
      exercises.sort(() => Math.random() - Math.random()).slice(0, a)
    );
  } if (11 > a) {
    console.log(
      exercises.sort(() => Math.random() - Math.random()).slice(0, a)
    );
  } else {
    console.log(`Netinkamas skaicius`);
  } 
};
randomExercises(12);
