import { Express, Request, Response } from 'express';
import shortId from 'shortid';
import { config } from '../Config/Constants';

export class URLController {
    public async shorten( req: Request, response: Response): Promise<void> {
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        response.json({originURL, hash, shortURL})

    
    }


public async redirect(req: Request, response: Response): Promise<void> {

    const { hash } = req.params 
    
    const url = {
        originURL: 'https://cloud.mongodb.com/v2/62cdbf7a188b0106d4a5a7a8#clusters',
        hash: '6DreLn9rE',
        shortURL: 'http://localhost:5000/6DreLn9rE'
    }
    response.redirect(url.originURL)
}
}