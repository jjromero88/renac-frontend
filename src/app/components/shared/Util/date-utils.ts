export function formatDate(date: Date | null): string | undefined {

  if (!date) {
    return undefined; // Retorna una cadena vacía si la fecha es nula
  }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  }
  
  //"2023-06-28T00:00:00" a "DD/MM/YYYY":
  export function formatDateFromString(fecha: string | null): string {
    if (!fecha) {
      return ''; // Retorna una cadena vacía si la fecha es nula
    }
  
    const fechaObjeto = new Date(fecha);
    const dia = fechaObjeto.getDate();
    const mes = fechaObjeto.getMonth() + 1; // Los meses comienzan desde 0
    const anio = fechaObjeto.getFullYear();
  
    // Asegurarse de que los valores de día y mes tengan dos dígitos
    const diaFormateado = dia < 10 ? `0${dia}` : dia.toString();
    const mesFormateado = mes < 10 ? `0${mes}` : mes.toString();
  
    return `${diaFormateado}/${mesFormateado}/${anio}`;
  }

  export function formatDateFromStringToPostgreSql(fecha: string | undefined): string | undefined {
    if (!fecha) {
      return undefined;
    }
  
    const partesFecha = fecha.split('/');
    if (partesFecha.length !== 3) {
      return undefined;
    }
  
    const dia = partesFecha[0];
    const mes = partesFecha[1];
    const anio = partesFecha[2];
  
    // Asegurarse de tener 2 dígitos para día y mes
    const diaFormateado = dia.padStart(2, '0');
    const mesFormateado = mes.padStart(2, '0');
  
    return `${anio}/${mesFormateado}/${diaFormateado}`;
  }