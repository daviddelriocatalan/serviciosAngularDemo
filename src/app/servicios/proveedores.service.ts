import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any = [ 
    {
    nombre: 'Telefónica',
    cif: 'B12345678',
    direccion: 'Paseo de la Castellana, 100',
    cp: '28.010',
    localidad: 'Madrid',
    provincia: 'Madrid',
    telefono: 911111111,
    email: 'info@telefonica.com',
    contacto: 'Juan Pérez'
    },
    {
    nombre: 'Iberdrola',
    cif: 'B87654321',
    direccion: 'Príncipe de Vergara, 200',
    cp: '28.015',
    localidad: 'Madrid',
    provincia: 'Madrid',
    telefono: 922222222,
    email: 'info@iberdrola.com',
    contacto: 'Laura Martínez'
    }
    ]

  getProveedores(){
    return this.proveedores;
  }
  
  getProveedorCIF(cif : any){
    let pos = this.proveedores.findIndex(n => n.cif == cif);
    return this.proveedores[pos];
  }

  deleteProveedoresCIF(cif : any){
    let pos = this.proveedores.findIndex(n => n.cif == cif);
    this.proveedores.splice(pos, 1);
    console.log(this.proveedores);
  }

  constructor() { }
}
