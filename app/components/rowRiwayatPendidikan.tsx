import RowRiwayat from "./rowRiwayat";
 export default function RowRiwayatPendidikan(){
 return(
    <div className="container mx-auto p-2 text-center pt-20">
    <h2 className="text-2xl">Riwayat Pendidikan</h2>
  <RowRiwayat jenjang="SD" sekolah="SDN KORPRI" tahun="2006" />
  <RowRiwayat jenjang="SMP" sekolah="SMPN 1 RANCAEKEK" tahun="2018" />
  <RowRiwayat jenjang="SMK" sekolah="SMK LUGINA RANCAEKEK" tahun="2021" />
  <RowRiwayat jenjang="PERGURUAN TINGGI" sekolah="MA'SOEM UNIVERSITY" tahun="2022" /> 
</div>

 );
   
 }


