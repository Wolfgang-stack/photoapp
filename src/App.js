import { Header } from './components/header-components/header.component';
import { PhotoList } from "./components/photo-list-components/photo-list.components";
import { HeaderBlank } from "./components/header-components/header.component";



// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
    
    <div className="pageContainer">
      <Header/>
      <HeaderBlank/>
      <PhotoList/>
    </div>
    
    </>

    
  );
};

export default App;
