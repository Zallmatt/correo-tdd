import { contenido } from "./Compuesto";

export class emailManager extends contenido{
    private correo: contenido[]=[];
    public nombreCarpeta:string;
    public idCarpeta:number;
    public asunto:string;
    public contendio:string;
   
    constructor(pNombreCarpeta:string, pIdCarpeta:number, pAsunto:string= "", pContenidCarpetao:string= ""){
        super(pAsunto,pContenidCarpetao);
        this.nombreCarpeta=pNombreCarpeta;
        this.idCarpeta=pIdCarpeta;
    }

    public Add(pMensaje: contenido){
        this.correo.push(pMensaje);
    }

    public cantidadCorreos(){
        let cantidad=0;
        let i;
        for(i=0;i<this.correo.length;i++){
            cantidad = cantidad+1;
        }
        return cantidad;
    }
}