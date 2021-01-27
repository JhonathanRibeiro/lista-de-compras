import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Lista de compras';
  today: number = Date.now();              
  
  public list: any[] = [
    {name: 'Chocolate'},
    {name: 'Coca Cola'},
    {name: 'Doritos'}
  ];

  public addProduct(productname){
    const el = document.querySelector('#productName');
    const msg = document.querySelector('#msg');
    console.log('produto: ', productname);
    
    if(productname === ''){
      msg.classList.add('display-block');
      el.classList.add('outlineDanger');
      return;
    }
    msg.classList.remove('display-block');
    el.classList.remove('outlineDanger');

    const newProduct = {
      name: productname
    };
    this.list.push(newProduct);
  }

  public delete(product){
    const confirmDelete = confirm(`O item ${product.name} será removido da lista, deseja continuar?`);

    if(confirmDelete == true){
      this.list = this.list.filter(p => p.name !== product.name);
    } 
  }
}