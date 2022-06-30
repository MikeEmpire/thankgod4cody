import * as React from "react";
import { useSpring, animated } from "react-spring";
import useSound from "use-sound";
import { Link, navigate } from "gatsby";
import Transition from "../components/Transition";

import "../styles/main.scss";
import intro from "../assets/intro.mp3";

const { useEffect } = React;

// markup
function IndexPage() {
  const authUser = localStorage.getItem("listener");
  if (!authUser) {
    return navigate("/");
  }
  const [play] = useSound(intro, { interrupt: true });
  useEffect(() => {
    play();
  }, [play]);
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
  const content = () => (
    <>
      <animated.main style={props}>
        You’re formally invited to a private one time streaming session of
        ThankGod4Cody’s upcoming project
        <br /> Keep Me In The Light.{" "}
      </animated.main>
      <animated.nav style={navProps}>
        <Link to="/KMITL">Enter The Light</Link>
      </animated.nav>
    </>
  );
  return <Transition>{content()}</Transition>;
}

export default IndexPage;
