import { User, UserRole } from '@prisma/client';
import crypto from 'crypto';
import JWT from 'jsonwebtoken';
import BadRequestError from '../errors/BadRequestError';
import prismaClient from '../db/index';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error(
    'JWT_SECRET is undefined, Please include JWT_SECRET in .env file'
  );
}

export interface UserJWTPayload {
  id: string;
  email: string;
  role: UserRole;
}

class UserService {
  public static createUser = prismaClient.user.create;

  public static async getUserByEmail(email: string) {
    try {
      const user = await prismaClient.user.findUnique({ where: { email } });
      return user;
    } catch (error) {
      throw new Error(`Error fetching user by email: ${error.message}`);
    }
  }

  public static async getUserById(id: string) {
    try {
      const user = await prismaClient.user.findUnique({ where: { id } });
      return user;
    } catch (error) {
      throw new Error(`Error fetching user by ID: ${error.message}`);
    }
  }

  public static async signinWithEmailAndPassword(
    email: string,
    password: string
  ) {
    try {
      const user = await this.getUserByEmail(email);
      if (!user) {
        throw new BadRequestError(`User with email ${email} does not exist!`);
      }

      if (user.authenticationType !== 'EMAIL_PASSWORD') {
        throw new BadRequestError(`Invalid Authentication Method`);
      }

      const userSalt = user.salt;

      if (!userSalt) {
        throw new BadRequestError(
          `Something went wrong with salt! Please contact the site admin`
        );
      }

      const hashPassword = crypto
        .createHmac('sha256', userSalt)
        .update(password)
        .digest('hex');

      if (user.password !== hashPassword) {
        throw new BadRequestError(`Invalid email or password!`);
      }

      return this.generateTokenForUser(user.email);
    } catch (error) {
      throw new Error(`Error signing in: ${error.message}`);
    }
  }

  public static verifyToken(token: string) {
    try {
      return JWT.verify(token, JWT_SECRET as string) as UserJWTPayload;
    } catch (error) {
      return null;
    }
  }

  public static async generateTokenForUser(email: string) {
    try {
      const user = await this.getUserByEmail(email);
      if (!user) {
        throw new BadRequestError(`User with ${email} does not exist`);
      }

      const payload: UserJWTPayload = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      const token = JWT.sign(payload, JWT_SECRET as string);
      return token;
    } catch (error) {
      throw new Error(`Error generating token: ${error.message}`);
    }
  }
}

export default UserService;
