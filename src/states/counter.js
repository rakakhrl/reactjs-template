import { atom } from "recoil";

const counter = atom({
  key: "counterState",
  default: 0,
});

export { counter };
