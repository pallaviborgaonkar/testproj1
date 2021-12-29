import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any[]=[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getProductList().subscribe(res=>{

        this.productList = res;

    });
  }



}
