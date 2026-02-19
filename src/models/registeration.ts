import {Schema,model} from "mongoose"
export interface IUser{
    username:String,
    email:string,
    password:string,
    role:{
        type:String,
        enum:["admin","Staffadmin","Staff"],
        default:"Staff"
    }
}

const userSchema=new Schema<IUser>({
    username:String,
    email:String,
    password:String,
     role:{
        type:String,
        enum:["admin","Staffadmin","Staff"],
        default:"Staff"
    }
});
export default model<IUser>("User",userSchema);