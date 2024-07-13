// const mongoose=require("mongoose");
// const UserSchema=mongoose.Schema({
//     username:{
//         type:String,
//         require:true
//     },
//     password:{
//         type:String,
//         required:true, 
//     },

//     email:{
//         type:String,
//         require:true,

//     }
// })



// const ProfileSchema=mongoose.Schema({
//     username:{
//         type:String,
//         require:true
//     },
//     bio:{
//         type:String,
//         require:true,
//     },
//     email:{
//         type:String,
//         require:true,

//     },
//     contact:{
//         type:Number,
//         require:true,

//     },
//     hobby:{
//         type:String,
//         require:true

//     },
//     gender:{
//         type:String,
//         require:true

//     },
//     follow:{
//         type:Array,
//         default:[]
//     },
//     following:{
//         type:Array,
//         default:[]
//     }
    
// })



// const PostSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         require:true,
//     },
//     content:{
//         type:String,
//         require:true,
//     },
//     description:{
//         type:String,
//         require:true,
//     },
//     username:{
//         type:String,
//         require:true,
        

//     },
//     email:{
//         type:String,
//         require:true,
//     },
//     like:{
//         type:Array,
//         default:[]

//     },
//     comment:{
//         type:Array,
//         default:[]
//     }
// })


// userModel=mongoose.model("User",UserSchema)
// profileModel=mongoose.model("Profile",ProfileSchema)
// postModel=mongoose.model("Post",PostSchema)
// module.exports={userModel,profileModel,postModel}

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const ProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    follow: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    }
});

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    like: {
        type: Array,
        default: []
    },
    comment: {
        type: Array,
        default: []
    }
});

const userModel = mongoose.model("User", UserSchema);
const profileModel = mongoose.model("Profile", ProfileSchema);
const postModel = mongoose.model("Post", PostSchema);

module.exports = { userModel, profileModel, postModel };
