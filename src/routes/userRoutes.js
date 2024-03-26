
const express = require('express');

const { signup, login} = require('../controllers/userControllers');
const {createProfile} = require('../controllers/createProfile');
const {updateProfile} = require('../controllers/updatesProfile');
const {createPost} = require('../controllers/createPost');
const {readPost } = require('../controllers/readsPost');
const {updatePost } = require('../controllers/updatesPost');
const {deletePost } = require('../controllers/deletePost');
const {likePost } = require('../controllers/likePost');
const { commentPost } = require('../controllers/comment');
const { followPost } = require('../controllers/follow');
const { searchProfile } = require('../controllers/searchsProfile');
const authToken=require('../middle/middle')




const userRouter = express.Router();
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.post('/createProfile',authToken,createProfile);
userRouter.put('/updateProfile',authToken, updateProfile);
userRouter.post('/createPost',authToken, createPost);
userRouter.get('/readPost', readPost);
userRouter.put('/updatePost',authToken, updatePost);
userRouter.delete('/deletePost',authToken, deletePost);
userRouter.post('/likePost/:_id',authToken, likePost);
userRouter.post('/commentPost/:_id',authToken, commentPost);
userRouter.post('/followPost/:_id',authToken,followPost);
userRouter.get('/searchProfile',searchProfile);


module.exports = userRouter;
