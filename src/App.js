import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/items/ItemListContainer';


function App() {
  return (
   <>
   
   <NavBar/> 
   <ItemListContainer greeting={"Bienvenido a Cripto Jack"}/>
   </>
  );
}

export default App;

