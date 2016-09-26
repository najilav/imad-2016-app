var express = require('express'); 
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content={
    title:"Article One",date:"21/09/2016",heading:"Article One",
    content:`hi this is article one.
             A day will come when the people of Pakistan will go against their own government to fight terrorism. India has been successful in isolating you (Pakistan) globally, and we will intensify our efforts to make sure that you are isolated globally. The people of Pakistan should ask their leaders that India and Pakistan got freedom in the same year, but India exports software and your (Pakistan) leaders are exporting terrorists," said Prime Minister Modi, while addressing a public rally in Kozhikode`
};
function createTemplate(data)
{
  var title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;
  
  var htmlTemplate = 
   ` <html>
    <head>
        <title> ${title}</title>
        <meta name="viewport" content="width:device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                 <h1>${heading}</h1>
            </div>
            <div>
                date:${date}
            </div>
            <div>
                <p>
                    ${content}
                </p>
            </div>
        </div>
    </body>
    </html>`;
    return htmlTemplate;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
