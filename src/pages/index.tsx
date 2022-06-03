import * as React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "gatsby";

import "../styles/main.scss";

// markup
function IndexPage() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { frequency: 10, mass: 40, friction: 200 },
    delay: 150,
  });
  const navProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { frequency: 10, mass: 20, friction: 20 },
    delay: 100,
  });
  return (
    <div className="background" id="main__container">
      <animated.main style={props}>
        You’re formally invited to a private one time streaming session of ThankGod4Cody’s upcoming project
        <br /> Keep Me In The Light.{" "}
      </animated.main>
      <animated.nav style={navProps}>
        <Link to="/KMITL">Enter Here</Link>
      </animated.nav>
    </div>
  );
}

export default IndexPage;
