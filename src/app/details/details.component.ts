import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Mongo2Service} from '../mongo2.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() product: Product;


  respuesta: any;
  products:any;

    constructor(private location: Location,
    private route: ActivatedRoute,
                private productService: ProductService,private mongo2Service: Mongo2Service) { }

  ngOnInit() {
  this.getProduct();
  }


  getProduct() {
    const id=+ this.route.snapshot.paramMap.get('id');
    console.log('entro funcion componente');

    this.mongo2Service.getProduct(id).subscribe(respuesta => {
      this.respuesta = respuesta;
      this.products = this.respuesta.response.data; //De esta forma obtienes el arreglo del resultado del servidor
      console.log(this.respuesta);
    });
  }
   // getProduct():void{
    //const id=+ this.route.snapshot.paramMap.get('id');
    //this.productService.getProduct(id)
    //.subscribe(product => this.product = product);
   // }
  goBack(): void{
  this.location.back();
  }

}
