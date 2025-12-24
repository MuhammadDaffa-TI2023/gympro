import Navbar from "./components/Navbar";
import Sejarah from "./pages/Sejarah";
import GerakanDasar from "./pages/GerakanDasar";
import Fasilitas from "./pages/Fasilitas";
import Suplemen from "./pages/Suplemen";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Sejarah />
      <GerakanDasar />
      <Fasilitas />
      <Suplemen />
      <Footer />
    </>
  );
}
