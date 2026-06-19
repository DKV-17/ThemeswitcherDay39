import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const theme = useContext(ThemeContext);

  return (
    <p>
      Website is running in {theme} mode
    </p>
  );
}

export default Content;