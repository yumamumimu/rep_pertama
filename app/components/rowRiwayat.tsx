export default function RowRiwayat(props:any) {
    return (
        <div className="border-2 border-blue-500/75 rounded-lg bg-gray-100 p-2 my-5">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-1">
              <div className="col-span-12 md:col-span-3 font-bold">{props.jenjang}</div>
              <div className="col-span-12 md:col-span-3 font-bold">{props.sekolah}</div>
              <div className="col-span-12 md:col-span-3 font-bold">{props.tahun}</div>
              <div className="col-span-12 md:col-span-3 font-bold">{props.tahunkerja}</div>
              <div className="col-span-12 md:col-span-3 font-bold">{props.instansi}</div>
              <div className="col-span-12 md:col-span-3 font-bold">{props.posisi}</div>
            </div>
        </div>
    </div>
    );
}