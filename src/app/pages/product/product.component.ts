import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';
import { CategoriesModel } from 'src/app/entities/categories.model';
import { CategoryHttpServiceService } from 'src/app/services/category-http-service.service';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  httpClient: any;
  products: ProductModel[] = [];
  selectedProduct: UpdateProductDto={}
  constructor(private productHttpService: ProductHttpServiceService ,
              private categoryHttpServices: CategoryHttpServiceService
    ) {};
    initProduct(){
      this.selectedProduct = {title:'',price:0,description:''}
    }


    getProducts(){
      this.productHttpService.getAll().subscribe
      (response => {
        this.products=response;
        console.log(response);
      });
    }

    getProduct(){
      this.productHttpService.getOne(2).subscribe
      (response => {console.log(response);
      });
    }


    createProduct(){
      const data = {
        title:"Salas",
        price:20,
        description:"Salas color beigi / Estefany Patricia",
        images:["https://sdfsdgsdhasjh"],
        categoryId:1
      }
      const url = "https://i.pinimg.com/originals/15/c5/69/15c56972ae4fbb6b394a6e6efced477b.jpg";
      this.productHttpService.store(data).subscribe(
        response => {console.log(response);
        }
      );
    }

    updateProduct(){
      const data = {
        title:"Salan",
        price:25,
        description:"De la madera Muebles/ Estefany Patricia",
      }
      const url = "https://api.escuelajs.co/api/v1/products/208";
      this.productHttpService.update(61, data).subscribe(
        response => {console.log(response);
        }
      );
    }

    editProduct(product:ProductModel){
      this.selectedProduct = product;
    }

    deleteProduct(id:ProductModel['id']) {
      this.productHttpService.destroy(id).subscribe(
        response => {
          this.products=this.products.filter(product => product.id != id);
          console.log(response);
        }
      );
    }

  //////////////////////////////////////////CATEGORIES////////////////////////////////////////////////

  getCategories():void{
    this.categoryHttpServices.getAll().subscribe
    (response => {console.log(response);
    });
  }

  getCategory(){
    this.categoryHttpServices.getOne(4).subscribe
    (response => {console.log(response);
    });
  }


  createCategory(){
    const data : CategoriesModel = {
    name: "Categoria Estefany Patricia Suntaxi",
    image: "https://api.lorem.space/image/watch?w=640&h=480&r=3123"
    }
    this.categoryHttpServices.store(data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateCategory(){
    const data :CategoriesModel = {
      name: "Categoria Estefany",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=3123"
    }
    this.categoryHttpServices.update(12, data).subscribe(
      (response ) => {console.log(response);
      }
    );
  }


  deleteCategory(){
    this.categoryHttpServices.destroy(13).subscribe
    (response =>console.log(response));
  }


  ngOnInit(): void{
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();

    ////////////////////////CATEGORY/////////////////////
    //this.getCategories();
    //this.getCategory();
    //this.createCategory();
    //this.updateCategory();
    //this.deleteCategory();
  }

}