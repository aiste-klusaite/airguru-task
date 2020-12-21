import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Suscribe from './components/Suscribe/Suscribe';
import Savings from './components/Savings/Savings';
import { ReactComponent as Waves } from './assets/images/svg/waves.svg'
import './assets/styles/App.scss';

const App = () => {
  return (
    <div className="app content">
      <Header />
      <Suscribe />
      <Savings />
      <div className="app__container">
        <Waves className="app__container__icon"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
