
const express = require('express');
const { signup, login} = require('../controllers/userControllers');
const {viewProfile} = require('../controllers/viewsProfile');
const {updateProfile} = require('../controllers/updatesProfile');
const {createPost} = require('../controllers/createPost');
const {readPost } = require('../controllers/readsPost');
const {updatePost } = require('../controllers/updatesPost');
const {deletePost } = require('../controllers/deletePost');
const {likePost } = require('../controllers/likePost');
const { commentPost } = require('../controllers/comment');
const { followPost } = require('../controllers/follow');
const { searchProfile } = require('../controllers/searchsProfile');



const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/viewProfile', viewProfile);
userRouter.put('/updateProfile', updateProfile);
userRouter.post('/createPost', createPost);
userRouter.get('/readPost', readPost);
userRouter.put('/updatePost', updatePost);
userRouter.delete('/deletePost', deletePost);
userRouter.post('/likePost/:_id', likePost);
userRouter.post('/commentPost/:_id', commentPost);
userRouter.post('/followPost/:_id', followPost);
userRouter.get('/searchProfile', searchProfile);


module.exports = userRouter;
