import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <div className="px-4 md:px-40 lg:px-60">
        <Header />
        <div className="flex flex-col py-5 md:flex-row">
          <LeftSection />
            <Form />
        </div>
      </div>
      <footer className="w-full bg-blue-800 mt-auto">
        <Footer />
      </footer>
    </>
  );
}

export default App;
