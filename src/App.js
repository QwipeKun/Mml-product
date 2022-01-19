
import Header from "./components/Header/Header";
import s from "./App.module.css"
import MainBlockOne from "./components/MainBlockOne/MainBlockOne"
let App = () => {
  return (
    <div className={s.body}>
      <Header />
      <MainBlockOne />
    </div>
  );
}

export default App;
