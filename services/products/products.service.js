import faker from 'faker'
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
      this.products.push(newProduct)
    return newProduct

  }

  update(data,id){
    const index = this.products.findIndex(item => item.id== id)
    if(index == -1){
      throw new Error('producto not found')
    }

     this.products[index] = data


    return {
      message: 'data updated',
      data
    }


  }
  destroy(id){
    const index = this.products.findIndex(item => item.id == id)

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
    return this.products.find(item => item.id=== id)
  }
}
