import { RECEIVE_HELLO_WORLD } from "../constants/index";

export default (state = "", { type }) => {
  switch (type) {
    case RECEIVE_HELLO_WORLD:
      console.log("masuk reducer", type);
      return "Hello World";
      break;

    default:
      return state;
  }
};
