import Ciclo from "@/domain/CIclo";
import executeQuery from "../postgres.connector";

const getOfertaFormativa = async (): Promise<Ciclo[]> => {
  const sql = "SELECT * FROM ciclos";
  const rows: any[] = await executeQuery(sql);
  return rows.map((row) => {
    return {
      codigo: row.codigo,
      nombre: row.nombre,
    };
  });
};

export { getOfertaFormativa };
