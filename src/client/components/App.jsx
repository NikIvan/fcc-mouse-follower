import React, { useState, useCallback } from 'react';

const width = 320;
const height = 320;
const radius = 40;
const centerX = width / 2;
const centerY = height / 2;

const mousePositionInitialState = { x: centerX, y: centerY };

function App() {
  const [mousePosition, setMousePosition] = useState(mousePositionInitialState);

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;

    setMousePosition({ x: clientX, y: clientY });
  }, [setMousePosition]);

  return (
    <svg id={'svg'} width={width} height={height} onMouseMove={handleMouseMove}>
      <circle r={radius} cx={mousePosition.x} cy={mousePosition.y} />
    </svg>
  );
}

export default App;
