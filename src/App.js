import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from "./components/details/ItemDetailContainer";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';


function App() {
  return (
   <>
   <BrowserRouter>
  
   <NavBar/> 
   <ItemListContainer greeting={"Bienvenido a Tienda Jack"}/>
  
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}  />
          <Route exact path="/categoria/id:" element={<ItemListContainer/>}/>
        </Routes>
      
   
   
   </BrowserRouter>
   </>
  );
}

export default App; 




{/* <Route exact path="/ItemDetail/id:" element={ItemDetailContainer}  />
<Route exact path="/categoria/:categoriaId:" element={ItemListContainer}  /> */}