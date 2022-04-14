import { contenido } from "./Compuesto";

export class Correo extends contenido{

    public remitente:string;
    public paraAgregar:string;

    constructor(pAsunto:string, pContenido:string, pRemitente:string, pPAgregar:string){
        super(pAsunto, pContenido)
        this.remitente=pRemitente;
        this.paraAgregar=pPAgregar;
    }


}