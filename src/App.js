
import Header from "./components/Header/Header";
import s from "./App.module.css"
import MainBlockOne from "./components/MainBlockOne/MainBlockOne"
import MainBlockTwo from "./components/MaineBlockTwo/MainBlockTwo"

let App = () => {
  return (
    <div className={s.body}>
      <Header />
      <MainBlockOne />
      <MainBlockTwo />
    </div>
  );
}

export default App;
