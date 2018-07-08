var express= require('express');
var app=express();
var bodyparser= require('body-parser');
var data=require('./users.json')
//Utilisation du body parser
app.use(bodyparser.urlencoded({
	extended:false
}));
//Choix du moteur de template
app.set('view engine','ejs');
//Utilisation de tout le css dans le dossier public pour la page '/'
app.use(express.static('public'));
app.use('/connect',express.static('pulic'));
//Action lors de l'arrivee sur la page accueil
app.get('/',(req,res)=>{
	res.render('index');
});
app.post('/connect',(req,res)=>{
	var user=req.body.connect_username;
	if(user=='machin'){
		res.render('index',{machin:'machin'})
	}else if (user=='truc'){
		res.render('index',{truc:'truc'})
	}else if(user=='bidule'){
		res.render('index',{bidule:'bidule'})
	}else{
	res.render('index');
}
});
app.listen(8080);