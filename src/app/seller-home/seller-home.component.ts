import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { prod } from '../data-types';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{

  productList : undefined | prod[];
  productMessage : undefined | string;
  icon = faTrash;
  icon2 = faEdit;
  constructor(private product:ProductService){

  }



  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id:number){
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product is deleted successfully"
        this.list();
      }
    })

    setTimeout(()=>{
      this.productMessage=undefined
    },3000)

  }

  list(){
    this.product.productList().subscribe((result)=>{

      if(result){
        this.productList=result;
      }

    })
  }
 

}
