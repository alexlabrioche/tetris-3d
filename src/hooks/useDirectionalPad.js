import { useReducer, useEffect } from "react";

const initialKeys = {
  left: false,
  up: false,
  right: false,
  down: false,
};

const ON_LEFT_KEY = "ON_LEFT_KEY";
const ON_UP_KEY = "ON_UP_KEY";
const ON_RIGHT_KEY = "ON_RIGHT_KEY";
const ON_DOWN_KEY = "ON_DOWN_KEY";
const LEFT_KEY_CODE = 37;
const UP_KEY_CODE = 38;
const RIGHT_KEY_CODE = 39;
const DOWN_KEY_CODE = 40;

function reducer(state, { type, pressed }) {
  switch (type) {
    case ON_LEFT_KEY:
      return { ...state, left: pressed };
    case ON_RIGHT_KEY:
      return { ...state, right: pressed };
    case ON_UP_KEY:
      return { ...state, up: pressed };
    case ON_DOWN_KEY:
      return { ...state, down: pressed };
    default:
      throw new Error();
  }
}

export default function useDirectionalPad(key) {
  const [keys, dispatch] = useReducer(reducer, initialKeys);

  useEffect(() => {
    const match = ({ keyCode }) => {
      switch (keyCode) {
        case LEFT_KEY_CODE:
          return ON_LEFT_KEY;
        case UP_KEY_CODE:
          return ON_UP_KEY;
        case RIGHT_KEY_CODE:
          return ON_RIGHT_KEY;
        case DOWN_KEY_CODE:
          return ON_DOWN_KEY;
        default:
          return null;
      }
    };

    const onDown = (event) => {
      const type = match(event);
      if (type) {
        dispatch({ type, pressed: true });
      }
    };

    const onUp = (event) => {
      const type = match(event);
      if (type) {
        dispatch({ type, pressed: false });
      }
    };

    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, []);

  return keys;
}
