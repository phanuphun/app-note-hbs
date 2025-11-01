import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import appConfig from '../configs/index.config';

const APP_SECRET = appConfig.app.secret;

export function attachUserFromJwtCookie(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.access_token;
    if (!token) return next();
    try {
        const payload = jwt.verify(token, APP_SECRET) as any;
        req.user = { id: payload.sub, username: payload.username, role: payload.role };
    } catch (_) {
        // Invalid token, ignore
    }
    next();
}

export function requireLogin(req: Request, res: Response, next: NextFunction) {
    if (!req.user){
        console.log('Unauthorized access attempt to:', req.originalUrl);
        return res.redirect('/login');
    }
    next();
}