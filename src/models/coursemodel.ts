import { Schema,model} from "mongoose";

const courseSchema=new Schema ({
    courseName:String,
    staffId:{type:Schema.Types.ObjectId,ref:"Staff"}
},{timestamps:true})
export default model("Course",courseSchema);

