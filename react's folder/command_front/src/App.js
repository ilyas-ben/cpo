import Commande from "./Commande";
import Head from "./Header";


function App() {
  var sampleCommand = {
    date: "211:002",
    description: "sample command"
  }

  return (
    <div>
      <Head />
      <Commande />
    </div>
  );
}


export default App;
