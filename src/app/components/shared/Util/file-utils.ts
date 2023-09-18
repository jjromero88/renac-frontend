//       context: funcion que recibe un file y lo convierte en un string de base 64
export function fileToStringBase64(file: File | null): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        if (!file) {
          resolve(undefined); // Retorna undefined si el archivo es nulo
          return;
        }
    
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          resolve(base64String);
        };
        reader.onerror = () => {
          reject(new Error('Error al leer el archivo.'));
        };
        reader.readAsDataURL(file);
      });
  }

export function downloadBase64File(base64String: string | null | undefined, contentType: string| null | undefined, fileName: string| null | undefined) {

  if(!base64String || !fileName || !contentType) {
    return;
  }
  
  const blob = base64ToBlob(base64String, contentType);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function base64ToBlob(base64String: string, contentType: string): Blob {
  const byteCharacters = atob(base64String);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

export function obtenerNombreArchivoDesdeRuta(rutaCompleta: string | null | undefined): string | undefined{

  if(rutaCompleta) {
    const lastIndex = rutaCompleta.lastIndexOf("\\");
    const nombreArchivo = rutaCompleta.substring(lastIndex + 1);
    return nombreArchivo;
  }

  return undefined;
}