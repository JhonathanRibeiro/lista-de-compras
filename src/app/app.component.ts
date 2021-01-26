import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de compras';

  list = [
    {
      name: 'Chocolate'
    },
    {
      name: 'Coca Cola'
    },
    {
      name: 'Doritos'
    },
    {
      name: 'Coxinha'
    }
  ];

  public addProduct(productname){
    const el = document.querySelector('#productName');
    const msg = document.querySelector('#msg');

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