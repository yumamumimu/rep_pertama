
import "./yuma-style.css"
import RowRiwayat from "./components/rowRiwayat";
import RowRiwayatKerjaan from "./components/RowRiwayatPekerjaan";
import Hero from "./components/hero";
import RowRiwayatPendidikan from "./components/rowRiwayatPendidikan";
import FavColor from "./components/favColor";
import Contact from "./components/contact";


export default function Gallery() {
  return (
    <section>
      <Hero />
      <RowRiwayatPendidikan />
      <RowRiwayatKerjaan />
      <FavColor />
      <Contact />

      
      
    </section>
  );
}
