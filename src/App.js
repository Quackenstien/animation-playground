import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let circleBlack = useRef(null);

  const [toggleCircle, setToggleCircle] = useState(false);

  const handleRedCircle = () => {
    TweenMax.to(circleRed, 2, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setToggleCircle(true);
  };

  const handleRedCircle1 = () => {
    TweenMax.to(circleRed, 2, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setToggleCircle(false);
  };

  const handleYellowCircle = () => {
    TweenMax.to(circle, 2, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setToggleCircle(true);
  };

  const handleYellowCircle1 = () => {
    TweenMax.to(circle, 2, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setToggleCircle(false);
  };

  const handleBlueCircle = () => {
    TweenMax.to(circleBlue, 2, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setToggleCircle(true);
  };

  const handleBlackCircle1 = () => {
    TweenMax.to(circleBlack, 2, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setToggleCircle(false);
  };
  const handleBlackCircle = () => {
    TweenMax.to(circleBlack, 2, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setToggleCircle(true);
  };

  const handleShrinkAll = () => {
    TweenMax.to([circleRed, circle, circleBlue, circleBlack], 2, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setToggleCircle(false);
  };

  useEffect(() => {
    // TweenMax.from(circle, 2, { opacity: 0, x: 100, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 2, {
    //   opacity: 0,
    //   x: 100,
    //   ease: Power3.easeOut,
    //   delay: 0.2,
    // });
    // TweenMax.from(circleBlue, 2, {
    //   opacity: 0,
    //   x: 100,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // });

    //Bellow is the same as above just cleaner and dryer. The order of variables on the below array determine the order in which the animations will occur, ie; top down = index zero in this example.

    TweenMax.to(app, 0, { css: { visibility: "visible" } }); //This along with setting .app to hidden will let the DOM load then run the animations to allow for a smooth transition.
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue, circleBlack],
      2,
      { opacity: 0, x: 100, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <div className="App" ref={(el) => (app = el)}>
      <header className="App-header">
        <h1>Click on the circles to see some magic!!! </h1>

        <div className="circle-container">
          <div
            className="circle"
            ref={(el) => (circle = el)}
            onClick={
              toggleCircle !== true ? handleYellowCircle : handleYellowCircle1
            }
          ></div>
          <div
            className="circle red"
            ref={(el) => (circleRed = el)}
            onClick={toggleCircle !== true ? handleRedCircle : handleRedCircle1}
          ></div>
          <div
            className="circle blue"
            ref={(el) => (circleBlue = el)}
            onClick={toggleCircle !== true ? handleBlueCircle : handleShrinkAll}
          ></div>
          <div
            className="circle black"
            ref={(el) => (circleBlack = el)}
            onClick={
              toggleCircle !== true ? handleBlackCircle : handleBlackCircle1
            }
          ></div>
        </div>
      </header>
    </div>
  );
}

export default App;
