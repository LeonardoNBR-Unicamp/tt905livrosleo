const express = require('express');
const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors');
 app.use(cors());

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Hello World!");
     }
 ); 

 app.get('/', function (req, res){
        res.send("Hello denovo!");
 });

var obras = [
    {titulo: "Amar, verbo intransitivo", autor:"Mário de Andrade"},
    {titulo: "O bem-amado", autor:"Dias Gomes"},
    {titulo: "Instituição da religião Cristã", autor:"João Calvino"},
    {titulo: "Alienista", autor:"Machado de Assis"},
    
]

app.get('/obras', function(req, res){
        //res.send(mensagens);
        res.send(obras.filter(Boolean));
    } 
);
app.get('/obras/:id', function(req, res){
        const id = req.params.id - 1;
        const obra = obras[id];

        if (!obra){
            res.send("obra não encontrada!");
        } else {
            res.send(obra);
        }
    }
);

app.post('/obras', 
    (req, res) => {
        console.log(req.body.obra);
        const obra = req.body;
        obras.push(obra);
        res.send("obra adicionada!")
    }
);

app.put('/obras/:id',
    (req, res) => {
        var id = req.params.id - 1;
        console.log(req.body.obra);
        const obra = req.body;
        obras[id] = obra;        
        res.send("obra atualizada!")
    }
);

app.delete('/obras/:id', 
    (req, res) => {
        var id = req.params.id - 1;
        delete obras[id];
        res.send("obra removida!");
    }
);