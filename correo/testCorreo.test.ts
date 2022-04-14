import { contenido } from "./Compuesto";
import { Correo } from './HojaCorreo';
import { emailManager } from './Componente';


test('Cuando_AñadirCorreo_Deberia_SumarCorreoEnCarpeta', ()=>{
    let correo1: Correo = new Correo("asunto", "mensaje1", "Nombre1", "Nombre1");
    let correo2: Correo = new Correo("asunto2", "mensaje2", "Nombre2", "Nombre2");
    let correo3: Correo = new Correo("asunto3", "mensaje3", "Nombre3", "Nombre3");

    let carpeta: emailManager = new emailManager("Enviados", 1 );
    carpeta.Add(correo1);
    carpeta.Add(correo2);
    carpeta.Add(correo3);

    expect(carpeta.cantidadCorreos()).toBe(3);
})