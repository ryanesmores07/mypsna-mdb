import { useRouteError } from "react-router-dom";
import "../utils/animations.css"

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <h4 className="font-bold text-4xl center text-flicker-in-glow">There was an error...</h4>;
};
export default ErrorElement;
