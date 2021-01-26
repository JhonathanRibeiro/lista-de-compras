import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de compras';
  products = [
    {
      label: 'Chocolate'
    },
    {
      label: 'Coca Cola'
    },
    {
      label: 'Doritos'
    },
    {
      label: 'Coxinha'
    }
  ];

  public addProduct(newProductLabel){
    const el = document.querySelector('#productName');

    if(newProductLabel === ''){
      alert(`Não é possível adicionar um produto sem nome, por favor, preencha o campo e tente novamente`);
      el.classList.add('btnOutlineDanger');
      return;
    }
    el.classList.remove('btnOutlineDanger');
    
    const newProduct = {
      label: newProductLabel
    };

    this.products.push(newProduct);
  }

  public deleteProduct(product){
    this.products = this.products.filter(p => p.label !== product.label);
  }

}
