import foto from "../yumek.jpg";
import "../yuma-style.css"

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
      <h1 className="text-black-300 font-bold">CV Online</h1>
      <h2 className="text-3xl font-bold">Bayu Pratama</h2>
      <Profile />
      <p>Saya adalah seorang mahasiswa di Ma'soem University semester 5 jurusan Sistem Informasi.
        Saya tidak memiliki bakat terentu, saya hanyalah seorang NPC biasa di sini
        yayayyaya
      </p>
      </div>
    );
    function Profile() {
        return <img src={foto.src} alt="Bayu Pratama" className="fotoku" />;
      }
}

