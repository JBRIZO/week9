import { User } from './user.interface';

export interface UserCredentials {
  data: { token: string; user: User };
}
