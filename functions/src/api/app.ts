import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

export class App {
    public express: express.Application;

    constructor() {
        this.express = express();

        this.middleware();

        this.routes();
    }

    middleware(): void {
		this.express.use(logger('dev'));
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));
		this.express.use(function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
			next();
		});
    }
    
    routes(): void {
		let router = express.Router();
		// placeholder route handler
		router.get('/', (req, res, next) => {
			res.render('index')
		});
		router.get('/hello', (req, res, next) => {
			res.json({
				message: 'Hello World mesmo!'
			});
		});
		this.express.use('/', router);
		// this.express.use('/api/autenticacao', new AuthRouter().router);
		// this.express.use('/api/usuarios', new UsuarioRouter().router);
	}
}