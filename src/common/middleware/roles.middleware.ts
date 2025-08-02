import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from 'src/auth/interfaces/auth-request.interface';

@Injectable()
export class RolesMiddleware implements NestMiddleware {
  use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const user = req.user;

    if (!user || user.rol !== 'admin') {
      throw new ForbiddenException('Acceso denegado. Solo los administradores pueden acceder.');
    }

    next();
  }
}
