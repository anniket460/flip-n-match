import type1 from "../../assets/characters/crocodile.jpg";
import type2 from "../../assets/characters/dog.jpg";
import type3 from "../../assets/characters/duck.jpg";
import type4 from "../../assets/characters/hen.jpg";
import type5 from "../../assets/characters/rabbit.jpg";
import type6 from "../../assets/characters/shark.jpg";
import type7 from "../../assets/characters/snake.jpg";
import type8 from "../../assets/characters/tiger.jpg";
import type9 from "../../assets/characters/turtle.jpg";
import type10 from "../../assets/characters/unicorn.jpg";

const imageMap: { [key: number]: string } = {
  1: type1,
  2: type2,
  3: type3,
  4: type4,
  5: type5,
  6: type6,
  7: type7,
  8: type8,
  9: type9,
  10: type10,
};

export const handleGridImg = (stageNum: number) => {
  let randomArray: number[] = [];
  const totalCharacters = stageNum === 1 ? 5 : 10;
  const multiplicationFactor = stageNum === 1 ? 4 : 2;
  // creating 10 numbers array
  const numbers: number[] = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  // random comparator for slice method
  function randomComparator() {
    return Math.random() - 0.5;
  }
  const newArray = [...numbers];
  newArray.sort(randomComparator);

  // taking characters according to each level
  randomArray = newArray.slice(0, totalCharacters);

  // creating copy of the characters to match the grid number (i.e 20 items)
  const imageArray = randomArray.map((number) => imageMap[number]);
  let copiedImageArray: string[] = [];
  for (let i = 0; i < multiplicationFactor; i++) {
    copiedImageArray.push(...imageArray);
  }

  return copiedImageArray.sort(randomComparator);
};
