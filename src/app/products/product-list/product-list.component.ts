import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../model/Product';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'minimatch';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private readonly productService: ProductService) { }
  public dataSource = new MatTableDataSource<Product>();
  public displayedColumns = [ 'productID', 'productName', 'categories', 'unitPrice', 'quantityPerUnit', 'unitsInStock'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.productList();
  }

 productList() {
   this.productService.getProductList().subscribe(response => {
     this.dataSource.data = response as Product[];
   });
 }

 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
