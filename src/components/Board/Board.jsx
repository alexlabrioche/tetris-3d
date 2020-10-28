import React, { useEffect } from "react";
import { BoardWrapper, BoardGrid, Pixel, Title } from "./Board.styles";
import useDirectionalPad from "../../hooks/useDirectionalPad";
const COLUMNS = 10;
const ROWS = 20;

const X = Array.from(Array(COLUMNS).keys());
const Y = Array.from(Array(ROWS).keys());

export default function Board() {
  const [position, setPosition] = React.useState({ x: 4, y: 4 });
  const { left, up, right, down } = useDirectionalPad();

  useEffect(() => {
    if (left) {
      setPosition((p) => ({ ...p, y: p.y > 0 ? p.y-- : p.y }));
    }
    if (up) {
      setPosition((p) => ({ ...p, x: p.x > 0 ? p.x-- : p.x }));
    }
    if (right) {
      setPosition((p) => ({ ...p, y: p.y < COLUMNS - 1 ? p.y++ : p.y }));
    }
    if (down) {
      setPosition((p) => ({ ...p, x: p.x < ROWS - 1 ? p.x++ : p.x }));
    }
  }, [left, up, right, down]);
  return (
    <BoardWrapper>
      <Title>TETRIS3D</Title>
      <BoardGrid columns={COLUMNS} rows={ROWS}>
        {Y.map((x) =>
          X.map((y) => (
            <Pixel
              key={`${x}_${y}`}
              isOn={x === position.x && y === position.y}
            >
              <small>
                {x}-{y}
              </small>
            </Pixel>
          ))
        )}
      </BoardGrid>
    </BoardWrapper>
  );
}
