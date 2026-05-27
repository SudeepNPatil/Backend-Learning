import { Component, inject, OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  http = inject(HttpClient);
  products = signal<any[]>([]);

  ngOnInit(): void {
    this.getallproducts();
  }

  getallproducts() {
    this.http.get("https://www.nykaafashion.com/rest/appapi/V2/categories/products?apiVersion=6&categoryId=6823&PageSize=36&sort=popularity&category_filter=6826_6828&currentPage=1&filter_format=v2&meta=1&currency=INR&country_code=IN&deviceType=MSITE&device_os=mweb_windows&sort_algo=default",
    {headers: {
      accept: 'application/json',
      origin: 'https://www.nykaafashion.com',
      referer: 'https://www.nykaafashion.com/'
    }}).subscribe((result:any)=>{
      console.log(result.response.products);  
      this.products.set(result.response.products);
    })
  }

}
