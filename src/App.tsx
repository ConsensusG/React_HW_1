import LandingPage from "./components/LandingPage";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {
const items1 = ["1", "2", "3", "4", "5"];

  return (
    <>
    <Navbar />
    <LandingPage />
    <ListGroup items={items1} header={'Rate this transformation!'}/>
    </>
  )
};

export default App
