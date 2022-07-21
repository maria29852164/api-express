import faker from 'faker'
import boom from '@hapi/boom'
export class ProductsService{
  constructor() {
    this.products = []

    for(let i = 0; i < 20 ; i++ ){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl()
      })

    }
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

  store(data){

      const newProduct = data


      newProduct.id= faker.datatype.uuid()

    return new Promise( (resolve, reject)=> {
       setTimeout(()=> {
         resolve(data)
       },2000)
    })


  }

  update(data,id){
    const index = this.products.findIndex(item => item.id== id)
    if(index == -1){
      throw boom.notFound('not found product')
    }

     const product=this.products[index]

      this.products[index] = {
       ...product,
        ...data
      }


    return {
      message: 'data updated',
      product
    }


  }
   destroy(id){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('not found product')
    }

    this.products.splice(index,1)
    return {
      message: 'product deleted',
      index
    }

  }

 async all (cantProducts){



   return this.products;


  }
  findOne(id){

    const index=this.products.findIndex(item => item.id=== id)
    if(index === -1){
      throw  boom.notFound('Not found product')

    }
    return this.products[index]
  }
}
