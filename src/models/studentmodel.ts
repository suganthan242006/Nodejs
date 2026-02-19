import {Schema,model,Types} from "mongoose"
export interface IStudent{
    name:String,
    age:Number,
    courseId:{type:Types.ObjectId[]},
    course:string[],
    fees:Number,
    staffId: Types.ObjectId;
}

const studentSchema=new Schema<IStudent>({
    name:String,
    age:Number,
    courseId:[{type:Schema.Types.ObjectId,ref:"Course"}],
    course:[String],
    fees:Number,
    staffId: {
  type: Schema.Types.ObjectId,
  ref: "Staff"
}
});
export default model <IStudent>("Student",studentSchema);