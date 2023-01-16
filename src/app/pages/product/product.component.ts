//Trabajar con los metodos http de la libreria http client
import { Component, OnInit } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/entities/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor( private httpClient: HttpClient ) {
  };

  //se obtiene todos
  getProducts(): void {
    const response = this.httpClient.get("https://api.escuelajs.co/api/v1/products").subscribe(response => {
      console.log(response);
    })
    console.log(response);
  }
//se obtinene uno
  getProduct(): void {
    const response = this.httpClient.get("https://api.escuelajs.co/api/v1/products/277").subscribe(response => {
      console.log(response);
    })
    console.log(response);
  }

//crear producto
createProduct(): void {
  const data: IProduct = {
    title: "Estefany Patricia Suntaxi",
    price: 380,
    description: "Mueble en color beigi tapizado",
    images: ["https://img.freepik.com/fotos-premium/decoracion-hogar-muebles-sala-estar-muebles-tapizados-comodos-modernos-elegantes-exposicion-muebles-blandos-sala-exposicion-tienda-muebles_328764-8432.jpg"],
    categoryId: 1,
    category: {
      title: "Sala",
      description: "cambio de tapiz",
      id: 1,
    },
  }
  const url = "https://api.escuelajs.co/api/v1/products"
  this.httpClient.post(url, data).subscribe(response => {
    console.log(response);
  })
}

//editar productos
updateProduct(): void {
  const data: IProduct = {
    title: "De la Madera Muebles",
    price: 380,
    description: "Mueble en color beigi tapizado",
    images: ["https://img.freepik.com/fotos-premium/decoracion-hogar-muebles-sala-estar-muebles-tapizados-comodos-modernos-elegantes-exposicion-muebles-blandos-sala-exposicion-tienda-muebles_328764-8432.jpg"],
    categoryId: 1,
    category: {
      title: "Sala",
      description: "cambio de tapiz",
      id: 1,
    },
  }
  const url = "https://api.escuelajs.co/api/v1/products/383"
  this.httpClient.put(url, data).subscribe(response => {
    console.log(response);
  })
}

//eliminar producto
deleteProduct(): void{
  const url = "https://api.escuelajs.co/api/v1/products/277"
  this.httpClient.delete(url).subscribe(response => {
    console.log(response);
  })
}
  ngOnInit(): void {
    this.deleteProduct();
    //this.updateProduct();
    //this.createProduct();
    //this.getProducts();
    this.getProduct();
  
    
  };
};