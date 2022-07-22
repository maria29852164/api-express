import faker from 'faker'
import boom from '@hapi/boom'
import {pool} from '../../libs/db/postgres.pool'
export class ProductsService{
  constructor() {
    this.products = []


      this.pool= pool;
      this.pool.on('error',(err)=> console.error(err))

  }
  async find (){
    const query = 'SELECT * FROM task';
    const response = await this.pool.query(query);
    return response.rows
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
      product: this.products[index]
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



   return this.products.slice(0,cantProducts)


  }
  findOne(id){

    const index=this.products.findIndex(item => item.id=== id)
    if(index === -1){
      throw  boom.notFound('Not found product')

    }
    return this.products[index]
  }
}
