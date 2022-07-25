import Sequelize, { DataTypes, Model, Sequelize } from "sequelize";


export const UserSchema = {
    id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique:true
    },
   password : {
      allowNull:false,
     type: DataTypes.STRING
   },
  createdAt:{
      allowNull:false,
    type:DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

export class User extends Model{
  static associate(){

  }

  static config (sequelize){
    return {
      sequelize,
      tableName:'users',
      modelName:'User',
      timestamps:false
    }
  }

}
