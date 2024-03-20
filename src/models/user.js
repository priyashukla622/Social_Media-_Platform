const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true, 
    },

    email:{
        type:String,
        require:true,

    }
})


const ProfileSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    bio:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,

    },
    contect:{
        type:Number,
        require:true,
        validate: {
            validator: function(contect) {
                const cleanNumber = contect.replace(/\D/g, '');
                return cleanNumber.length === 10;
            },
            message: "Phone number must be exactly 10 digits long and contain only numbers."
        }
    },
    hobby:{
        type:String,
        require:true

    },
    gender:{
        type:String,
        require:true

    },
    follow:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    }
    
})



const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    content:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
        

    },
    email:{
        type:String,
        require:true,
    },
    like:{
        type:Array,
        default:[]

    },
    comment:{
        type:Array,
        default:[]
    }
})


userModel=mongoose.model("User",UserSchema)
profileModel=mongoose.model("Profile",ProfileSchema)
postModel=mongoose.model("Post",PostSchema)
module.exports={userModel,profileModel,postModel}
