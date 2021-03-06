

const express = require('express');
const hbs = require('hbs');

const PORT =process.env.PORT || 3000;


var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCureentYear',() => {
  return new Date().getFullYear();
});

hbs.registerHelper('screemIt',(text) =>{
    return text.toUpperCase();
});

app.use(express.static(__dirname+'/public'));

app.get('/', (request, response)=>{

  //response.send('<h1>Hello Express</h1>');
  // response.send({
  //   name:'Doron',
  //   likes: ['girls','guns','boobs']
  //
  // });

  response.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'Welcom to my express hbs dynamic template website'
  });
});


app.get('/about',(req, res)=>{
  //  res.send('<h2>About Us.</h2><p>Some text about us..... </p>')
  res.render('about.hbs',{
    pageTitle:'About Page'
  });
});

app.get('/bad', (req,res)=>{
  res.send({
    errorMessage:'Bad request',
    errorCode:400
  });
});

app.get('/projects', (req,res) =>{
  res.render('projects.hbs', {
    welcomeMessage:'Check out some of the projects',
    pageTitle:'Projects'
  });
});


app.listen(PORT,()=>{
  console.log(`http server is up and running on port ${PORT}`);
});
