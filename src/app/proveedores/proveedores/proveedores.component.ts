import { Component, OnInit } from '@angular/core';

import { ProveedoresService } from '../../servicios/proveedores.service';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores : any;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedores = this.proveedoresService.getProveedores();

    console.log(this.proveedores);
  }

  verProveedor(proveedor : any){
    console.log(this.proveedoresService.getProveedorCIF(proveedor.cif));
  }

  deleteProveedor(proveedor : any){
    this.proveedoresService.deleteProveedoresCIF(proveedor.cif);
  }

}
