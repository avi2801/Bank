const mongoose=require('mongoose')

const Schema=mongoose.Schema

const transactionList= new Schema({
	name1:{type:String,required:true},
	id1:{type:Number,required:true},
	name2:{type:String,required:true},
	id1:{type:Number,required:true},
	balance:{type:Number,required:true}
})

const transaction=mongoose.model('transaction',transactionList)

module.exports=transaction;


