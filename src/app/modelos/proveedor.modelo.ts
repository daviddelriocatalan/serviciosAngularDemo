export class Proveedor {
    public nombre: string;
    public cif: string;
    public direccion: string;
    public cp: string;
    public localidad: string;
    public provincia: string;
    public telefono: number;
    public email: string;
    public contacto: string;

    constructor(nombre: string, cif: string, direccion: string, cp: string, localidad: string, provincia: string, telefono: number, email: string, contacto: string) {
        this.nombre = nombre;
        this.cif = cif;
        this.direccion = direccion;
        this.cp = cp;
        this.localidad = localidad;
        this.provincia = provincia;
        this.telefono = telefono;
        this.email = email;
        this.contacto = contacto;
    }

}