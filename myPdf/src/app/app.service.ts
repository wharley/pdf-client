import { Injectable } from '@angular/core';

declare let pdfMake: any;

@Injectable()
export class AppService {

  public products = [ 
  	{'code': 1, 'description': 'Nestlé Cookie 100g'},
  	{'code': 2, 'description': 'Danico biscuit 100g'},
  	{'code': 3, 'description': 'Rice Uncle Joao 5kg'},
  	{'code': 3, 'description': 'Coffee milk 1kg'}
  ];
  
  constructor() { }

  getProduct() {
  	return this.products;
  }

  reportDefault(docDefinition) {
  	pdfMake.createPdf(docDefinition).open()
  }

}
