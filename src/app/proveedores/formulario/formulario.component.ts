import { Component, OnInit } from '@angular/core';

import { ProveedoresService } from '../../servicios/proveedores.service';

import { Proveedor } from '../../modelos/proveedor.modelo';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: string;
  cif: string;
  direccion: string;
  cp: string;
  localidad: string;
  provincia: string;
  telefono: number;
  email: string;
  contacto: string;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
  }

  crearProveedor(value: Proveedor) {
    value = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      cp: this.cp,
      localidad: this.localidad,
      provincia: this.provincia,
      telefono: this.telefono,
      email: this.email,
      contacto: this.contacto
    };

    console.log(value);
    
    this.proveedoresService.anyadirProveedor(value);
    
  }

}
