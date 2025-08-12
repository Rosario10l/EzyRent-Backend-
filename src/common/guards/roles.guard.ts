import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { AuthenticatedRequest } from 'src/auth/interfaces/auth-request.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    console.log('User en RolesGuard:', request.user);

    const user = request.user as Usuario;
    if (!user || !user.rol) {
      return false;
    }

    return requiredRoles.includes(user.rol);
  }
}
