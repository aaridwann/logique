import Image from "next/image";
import React from "react";

function CardComponent({img,artist,title,genre,price}) {
  return (
  <div className={` w-full h-[150px] bg-white rounded-xl shadow-lg drop-shadow-xl p-4 flex items-center gap-2`}>

    {/* === img === */}
    <section className=" w-2/5 h-full bg-red-white flex items-center overflow-hidden rounded-xl ">
      <Image alt="img" width={170} height={170} src={img || 'https://i.pinimg.com/564x/cb/88/f8/cb88f81270fbe9b5e190ed532d7f3302.jpg'}/>
    </section>

    {/* text */}
    <section className="text-sm h-full justify-between w-3/5 text-gray-600 font-semibold flex flex-col gap-4 items-start ">
      <div>
      <p>{artist || 'Travy McCoy'}</p>
      <p className=" truncate max-h-96 text-lg max-w-[170px] font-bold ">{title||'Rough Water (feat. Jason Mraz)'}</p>
      </div>

      <div className=" self-end w-full flex items-center justify-between">
        <p className=" bg-green-400 text-xs text-white rounded-2xl px-4 font-normal py-1">{genre||'POP'}</p>

        <div className=" flex items-center gap-1">
          <Image alt="coint" width={20} height={20} src={'/img/png/dollar.png'}/>
          <p className=" font-bold text-yellow-400 text-lg ">{price||'1.9'}</p>
        </div>

      </div>
    </section>
  </div>
    );
}

export default CardComponent;
