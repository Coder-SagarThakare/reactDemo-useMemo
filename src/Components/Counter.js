import React, { useState, useMemo } from "react";

function Counter() {
  const [addBy1, setAddBy1] = useState(0);
  const [addBy2, setAddBy2] = useState(0);

  // Code with useMemo
  const isEven = useMemo(() => {
    console.log(" for loop rendered multiple times");
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return addBy1 % 2 === 0;
  }, [addBy1]);

  // code without USEMEMO

  // const isEven = () => {
  //   console.log(" for loop rendered multiple times");

  //   let i = 0;
  //   while (i < 900000000) {
  //     i++;
  //   }
  //   return addBy1 % 2 === 0;
  // };

  return (
    <div>
      <button onClick={() => setAddBy1(addBy1 + 1)}> add 1</button>
      <br />
      <span>
        {addBy1} {"   "}
      </span>
      <span>{isEven ? "Even" : "Odd"}</span>

      <hr />
      <button onClick={() => setAddBy2(addBy2 + 2)}> add 2</button>
      <span> {addBy2}</span>
    </div>
  );
}

export default Counter;

/* 
    jevha setAddBy2 krnar aahe tvha darveli even value ch aasnar aahe mhnun ith value even aahe ki odd he check kraychi garaj nahiye aaplyala.
    pn addBy1 mdhe value 1 ne increment honare so ith aaplyala check krav lagel ki addBy1 even aahe ki odd
*/
