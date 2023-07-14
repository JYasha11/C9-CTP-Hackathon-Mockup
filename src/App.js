import './App.css';
import Navbar from "./components/navbar"
import Banner from "./components/banner"
import CTPImg from "./components/landing-image"
import Theme from "./components/theme"
import CardGray from "./components/gray-card"
import CardWhite from "./components/white-card"
import Sponsors from "./components/sponsors"
import Footer from "./components/footer"
import logo from "./assets/ctp-logo-square.png"

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <CTPImg />
      <Theme />
      <CardGray
        heading="Hello"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        buttonInfo="Button"
        buttonHref="/test"
        imageSrc={logo}
      />
      <CardWhite
        heading="Hello"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        buttonInfo="Button"
        buttonHref="/test"
        imageSrc={logo}
      />
      <CardGray
        heading="Hello"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        buttonInfo="Button"
        buttonHref="/test"
        imageSrc={logo}
      />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
