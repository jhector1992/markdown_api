const { request, json } = require('express');
const Converter = require('../utils/converter');
const Markdown = require('../models/markdown');
const markdownService = require('../services/markdownService');

module.exports = {
    list: async function(req, res) {
        var markdown = new Markdown({
        title:  'Codigo 3',
        author: 'Juan Héctor',
        type: {
                id:     1,
                name:   'Markdown to Html'
            },
            code: {
                    html:   'MARKDOWN 3',
                    markdown: 'HTML 3'
                },
            hidden: false
        });            
        //await markdownService.create(markdown);

        let list =  await markdownService.getList();
        res.send(list);
    },

    converter : function(req, res) {
        var markdown = req.query.code;
        var html = Converter.markdownToHtml(markdown);
        
        res.status(201).send(
            {
                markdown: markdown,
                html: html
            })
    },

    details : function(req, res) {
        console.log('Markdown/Details');
        Markdown.findById(req.params.id, function(err, item) {
            if(err){
                console.log(err);
                res.status(400).send({ success: false, error: err });
            }
            else if(!item){
                console.log(`Item Markdown not found ${ req.params.id }`);
                res.status(404).send({ error: 404, message: `Item Markdown not found ${ req.params.id }` });
            }
            else{
                console.log(`Item found ${ item.id }`);
                res.send(item);
            }
        });
    },

    delete : function(req, res) {
        Markdown.findByIdAndDelete(req.params.id, function(err, item) { 
            console.log(`Item deleted ${ item.id }`);   
            res.send(item);
        });
    },

    create : function(req, res, data) {
        console.log('Create');
        console.log(req.body);
        res.status(202).send({success: 'true', data: req.body});
    },

    fill : async function(req, res, data) {
        console.log('FILL');

        f = function(arr){
            return arr[Math.floor((Math.random()*arr.length))];
        }
        nombres = ['Juan', 'Hector', 'Claudia', 'Pedro', 'Daniela', 'Sandra'];
        apellidos = ['Jauregui', 'Acevedo', 'Plascencia', 'Lopez', 'Perez', 'Rodriguez'];
        titulos = ['Test', 'Código', 'Prueba', 'Markdown'];
        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        var markdown = new Markdown({
            title:  f(titulos) + ' ' + f(numeros),
            author: f(nombres) + ' ' + f(apellidos),
            type: {
                    id:     1,
                    name:   'Markdown to Html'
                },
                code: {
                        html:   'HTML',
                        markdown: 'MARKDOWN'
                    },
                hidden: false
            });            
        await markdownService.create(markdown);
    
        console.log('Creado RANDOM');
        res.status(202).send( markdown );
    }
};