import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routes";
import "../src/Styles/styles.css";
// import Home from "./pages/Home/home";
function App() {
  return (
    <div className="App">
      <Routes>
        {routes &&
          routes.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={<item.component />}
              ></Route>
            );
          })}
      </Routes>
    </div>
  );
}

export default App;
