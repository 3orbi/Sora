import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ArtistProfile from "./pages/ArtistProfile";
import Messaging from "./pages/Messaging";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/discover" element={<Index />} />
      <Route path="/artist/:id" element={<ArtistProfile />} />
      <Route path="/messages" element={<Messaging />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
