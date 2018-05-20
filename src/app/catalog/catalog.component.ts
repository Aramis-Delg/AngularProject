import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {PRODUCTS} from '../mock-products';
import {ProductService} from '../product.service';
import {Mongo2Service} from '../mongo2.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
products: any;
respuesta: any;


  constructor(private productService: ProductService, private mongo2Service: Mongo2Service) {}
 // getProducts() {
  //console.log('entra funcion');
  //this.productService.getProducts().subscribe(products=>this.products=products)
  //this.mongo2Service.getProducts().subscribe(respuesta=>{
  //this.respuesta = respuesta;
  //console.log(this.respuesta);
  //});
  //}
  ngOnInit() {
  this.getProducts();

  }

  getProducts() {
    // this.productService.getProducts().subscribe(products=>this.products=products)
    console.log('entro funcion componente');

    this.mongo2Service.getProducts().subscribe(respuesta => {
      this.respuesta = respuesta;
      this.products = this.respuesta.response.data; // De esta forma obtienes el arreglo del resultado del servidor
      console.log(this.respuesta);
    });
  }


}
