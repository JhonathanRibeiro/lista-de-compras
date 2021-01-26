import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de compras';

  lista = [
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

    if(productname === ''){
      alert(`Não é possível adicionar um produto sem nome, por favor, preencha o campo e tente novamente`);
      el.classList.add('outlineDanger');
      return;
    }
    el.classList.remove('outlineDanger');

    const newProduct = {
      name: productname
    };
    this.lista.push(newProduct);
  }

  public delete(product){
    const confirmDelete = confirm(`O item ${product.name} será removido da lista, deseja continuar?`);
    
    if(confirmDelete == true){
      this.lista = this.lista.filter(p => p.name !== product.name);
    } 
  }
}