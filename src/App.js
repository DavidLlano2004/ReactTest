import React  from "react";
import { Route , Routes} from "react-router-dom";
import PrincipalView from "./views/principalview/principalview";
import CardPubli from "./components/cardpost/PublicationCard";
import Photos from "./components/albumsPhotos/albums";



function App() {
  
  return (
    // Uso la propiedad de routes, donde me permite encerrar las routes.
    <Routes>
      {/* Agrego una ruta principal */}
      <Route path="/" element={<PrincipalView />}>
        {/* En esta parte agregué un componente llamado PublicationCard que es el card con los datos del post y lo muestra */}
        <Route path="/" element={<CardPubli/>}/>
        <Route path="/albums" element={<Photos/>} />
      </Route>
    </Routes>
  );
}

export default App;
