var express = require('express') //Importamos express
var app = express(); //declaramos una app de express
var PORT = process.env.PORT || 3000; //declaramos el puerto del servidor
app.use('assets', express.static(__dirname + '/public')); // mapeo de la carpeta virtual
app.use(express.urlencoded({ extended: false})); //Parseamiento mediante URLencoded
app.set('view engine', 'ejs'); //especificar template engine
//primera ruta, a nivel de raiz
app.use('/', function(req,res,next){
    console.log('Request URL' + req.url);
    next();
});
app.get('/', function(req,res){
    res.render('index'); 
});
//segunda ruta, JSON
app.get('/api', function(req,res){
    res.json({firstname: 'Jhon', lastname: 'Snow'});
});
//tercera ruta, parametros -- Añadido, querys
app.get('/person/:id', function(req,res){
    res.render('person', {ID: req.params.id, Message: req.query.message, Times: req.query.times});
});
//ruta student render
app.get('/student', (req, res) => {
    res.render('index');
});
//ruta student POST
app.post('/student', (req, res) => {
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`);
});

app.listen(PORT); //levantar server y ponerlo a la espera.