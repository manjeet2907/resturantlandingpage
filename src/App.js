import "./App.css";

import {
  Header,
  AboutUs,
  Menu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./container";

import { Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
