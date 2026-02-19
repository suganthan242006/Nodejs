import {Schema,model,Types} from "mongoose"
export interface IStaff{
   name:String,
   age:Number,
   course:string,
   salary:Number,
   joinedat:Date;
   maxStudents: number;
}

const staffSchema=new Schema<IStaff>({
  name:String,
   age:Number,
   course:String,
   salary:Number,
   joinedat:Date,
   maxStudents: { type: Number, default: 30 },
},{timestamps:true});
export default model<IStaff>("Staff",staffSchema);