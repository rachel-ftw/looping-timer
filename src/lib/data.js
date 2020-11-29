import { createSubTimer } from "./helpers";

const data = [
  {
    id: 1,
    title: "serious list",
    isDisplayed: true,
    loopsMade: 0,
    subTimers: [
      createSubTimer(3, true, "rest", 1),
      createSubTimer(3, false, "do", 2),
      createSubTimer(3, false, "think", 3),
      createSubTimer(3, false, "swim", 4),
      createSubTimer(3, false, "run", 5),
    ],
  },
  {
    id: 2,
    title: "fruits list",
    isDisplayed: false,
    loopsMade: 0,
    subTimers: [
      createSubTimer(300, false, "apple", 1),
      createSubTimer(1200, true, "orange", 2),
      createSubTimer(4200, false, "banana", 3),
    ],
  },
];

export default data;
