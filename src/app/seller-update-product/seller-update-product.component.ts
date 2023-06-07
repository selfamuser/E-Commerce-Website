import { Component, OnInit } from '@angular/core';
import { prod } from '../data-types';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{

  productData : undefined | prod;
  productMessage : undefined | string;

  constructor(private route:ActivatedRoute,private product:ProductService,private router:Router){

  }

  ngOnInit(): void {

    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.getProduct(productId).subscribe((data)=>{

      this.productData=data;
    })
  }

  submit(data:any){

    if(this.productData){
      data.id=this.productData.id
    }

    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage = "Product details updated successfully"
        
      }
    })

    setTimeout(()=>{

      this.productMessage=undefined
      this.router.navigate(['seller-home'])
    },3000)
    


  }

}
