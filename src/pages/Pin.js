import React, { useState } from 'react';

function Pin({ pinSize }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };


  return (
    <div className={`pin ${pinSize}`}onClick={handleClick}>
      {/* <img></img> */}
    </div>
  );
}

export default Pin;
