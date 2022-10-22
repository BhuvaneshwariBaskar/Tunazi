const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {v4:uuidv4}=require('uuid');
const db=require('../database');

exports.signupPost = async(req,res)=>{
    const {username,email,password,mobileno}=req.body;
    await db.query('SELECT * FROM user_detail WHERE mobileno=?',[mobileno],async(err,results)=>{
        if(results && results.length > 0)
            return res.status(409).json({
                error: 'User already exists'
            });
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        await db.query('INSERT INTO user_detail (id, username,email,password,mobileno,created_at) VALUES(?,?,?,?,?)',[uuidv(),username,email,hash,mobileno,new Date()],async(err, results) => {
            if(err){
                return res.status(500).json({
                    error: err.message
                });
            }
            return res.status(200).json({
                message: 'Account created successfully'
            })
        })
        const user = results[0];
        req.session.user = user;
        const token =jwt.sign({
            id:results[0].id,
            username:results[0].username,
            email:results[0].email,
            mobileno:results[0].mobileno,
            created_at:results[0].created_at,
            updated_at:results[0].updated_at,
            followed_artist:results[0].followed_artist,
            history:results[0].history
        },process.env.SECRET,{
            expiresIn: 604800
        });
        return res.json({
            isloggedIn: true,
            token:token,
            user:user
        });
    });
}

// LoginPost

exports.loginPost = async(req,res)=>{
    const {mobileno,password} = req.body;
    await db.query('SELECT * FROM user_detail WHERE mobileno=?',[mobileno],async(err,results)=>{
        if(err){
            return res.status(500).json({
                error: 'User not found'
            });
        }
        if(results.length === 0)
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        const user = results[0];
        if(!bcrypt.compareSync(password,user.password)){
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }
        req.session.user=user;
        const token = jwt.sign({
            id:results[0].id,
            username:results[0].username,
            email:results[0].email,
            mobileno:results[0].mobileno,
            created_at:results[0].created_at,
            updated_at:results[0].updated_at,                                                                                                                       
            followed_artist:results[0].followed_artist,
            history:results[0].history
            },process.env.SECRET,{
            expiresIn: 604800

        });
        return res.json({
            isloggedIn: true,
            token:token,
            user:user
        });
    });
}