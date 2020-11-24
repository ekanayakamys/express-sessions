var express=require('express');
var app = express();
var bodyparser=require('body-parser');
var sessions = require('express-session');
var session;
app.use(bodyparser());
app.use(sessions({
    secret:'gahggdue52gv6t8'
}));

app.get('/',function(req,res){
    session=req.session;
    if(session.userid){
        res.send("welcome admin <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('form.html',{root:__dirname})
});
app.get('/logout',function(req,res){
        req.session.destroy();
        res.redirect('/');
});
app.post('/user',function(req,res){
    
    if(req.body.username=='admin' && req.body.password==1234){
        session=req.session;
        session.userid=req.body.username;
        res.send("welcome admin <a href=\'/logout'>click to logout</a>");
    }
    else{
        res.send('invalid username or password');
    }

})
app.listen(8080,function(req,res){
    console.log('wow');
})