import faker from 'faker'
export class ProductsService{
  constructor() {
    this.products = []
  }


  async generateProducts (counter)  {
    if(counter > 10){
      return this.products
    }
    this.products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price()
    })

    setTimeout(()=>  {
      let increment = counter +1
      return this.generateProducts(increment)
    }, 500 )

  }

 async all (cantProducts){


   for(let i = 0; i < cantProducts ; i++ ){
     this.products.push({
       name: faker.commerce.productName(),
       price: parseInt(faker.commerce.price(),10),
       image: faker.image.imageUrl()
     })

   }
   return this.products;


  }
}
