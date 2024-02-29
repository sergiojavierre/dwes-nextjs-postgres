import { getOfertaFormativa } from "../lib/db/ofertaformativa/OfertaFormativaRepositoryPostgres";

export default async function OfertaFormativa() {

  const ciclos = await getOfertaFormativa();
  console.log(ciclos);
  
  return (
    <main>
      <h1>Oferta Formativa</h1>
      <ul>
        {ciclos.map((ciclo) => (
          <li key={ciclo.codigo}>{ciclo.nombre}</li>
        ))}
      </ul>
    </main>
  );
}