import Image from "next/image";

import Noticia from "@/domain/Noticia";

export default function NoticiaItem({ noticia }: { noticia: Noticia }) {
  
  return (
    <li>
      <h2>{noticia.titulo}</h2>
      <p>{noticia.resumen}</p>
      <p>{noticia.fecha.toLocaleDateString()}</p>
      <Image src={noticia.imagen} alt={noticia.titulo} width={200} height={200} />
    </li>
  );
}
