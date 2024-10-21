import RowRiwayatKerjaan from "./rowRiwayat";
export default function RowRiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>
      <RowRiwayatKerjaan tahunkerja="2021" instansi="PT. KAHATEX" posisi="Operator Mesin" />
      <RowRiwayatKerjaan tahunkerja="2022" instansi="Aoshi Market" posisi="Content Creator" />
      <RowRiwayatKerjaan tahunkerja="2023" instansi="CV. TAKAPEDIA" posisi="Editor" />
      <RowRiwayatKerjaan tahunkerja="2023" instansi="CV. TAKAPEDIA" posisi="Worker" /> 
      </div>
    ); 
}