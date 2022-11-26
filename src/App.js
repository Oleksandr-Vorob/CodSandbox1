import "./styles.css";
import Autor from "./components/Autor";
import Quote from "./components/Quote";
import Date from "./components/Date";
import Likes from "./components/Likes";

export default function App() {
  return (
    <div className="App">
      <h1>Quote of day</h1>
      <Date date={"25.11.2022"} />
      <div className="bord">
        <Quote
          text={
            "No man is an island, entire of itself; every man is a piece of the continent."
          }
        />
        <Autor autor={"John Donne"} />
      </div>
      <Likes />
    </div>
  );
}
