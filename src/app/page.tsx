import styles from "./page.module.css";
import Noticia from "../domain/Noticia";
import NoticiaItem from "./ui/noticias/NoticiaItem";

export default function Home() {

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: "Noticia 1",
      resumen: "Resumen de la noticia 1",
      cuerpo: "Cuerpo de la noticia 1",
      imagen: "/noticia1.jpg",
      fecha: new Date(),
    },
    {
      id: 2,
      titulo: "Noticia 2",
      resumen: "Resumen de la noticia 2",
      cuerpo: "Cuerpo de la noticia 2",
      imagen: "/noticia2.jpg",
      fecha: new Date(),
    },
    {
      id: 3,
      titulo: "Noticia 3",
      resumen: "Resumen de la noticia 3",
      cuerpo: "Cuerpo de la noticia 3",
      imagen: "/noticia3.jpg",
      fecha: new Date(),
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.portada}>
        <h1>Noticias</h1>
        <ul className={styles.noticias}>
          {noticias.map((noticia) => (
           <NoticiaItem key={noticia.id} noticia={noticia} />
          ))}
        </ul>
     </section>
    </main>
  );
}
