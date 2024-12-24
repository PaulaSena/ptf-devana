import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact";
import Shape from "./components/hero/Shape";
import Test3d from "./components/Test";
import Test from "./components/Test";

{
  /*
import Speech from "./Speech";
*/
}

const App = () => {
  return (
    <div className="container">
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <section id="#portifolio">
        <Portifolio />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};
{
  /*import Test from "./components/Test";
   <Test />*/
}

export default App;
