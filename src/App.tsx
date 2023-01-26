import "./App.css";
import LOGO from "./logo.svg";

export const App = () => {
  return (
    <>
      <div>
        <img className="logo" src={LOGO} alt="react logo" />
        <h1>React TypeScript Boilerplate</h1>
        <p>
          - {process.env.NODE_ENV} {process.env.name} -
        </p>
      </div>
    </>
  );
};
