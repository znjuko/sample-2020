// создаем собственный сервер







const http = require('http');
const fs = require('fs');
const debug = require('debug');

const log = debug('*');

const server = http.createServer(
    (req, res) => {

        // почитать про шаблонные строки js 
        console.log('url : ', req.url);
        const filename = req.url === '/' ? req.url + 'index.html' : req.url;

        fs.readFile(`public${filename}`, (err, body) => {
            if (err) {
                log('Error : ', err);
                res.write('404');

                res.end();
                return;
            }

            res.write(body);
            log('OK', filename);

            res.end();
        });




        // сервер записал в заголовок ответ , но не закончил соеднинение
        // необходимо закрыть запрос
        //res.write('hello');
        // закрыли запрос 
        //res.end();

    }
);


server.listen(8000);