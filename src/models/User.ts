/* eslint-disable @typescript-eslint/no-useless-constructor */
import Adapters from 'next-auth/adapters';
import { EntitySchemaColumnOptions } from 'typeorm';

// Extend the built-in models using class inheritance
export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(
    name: string,
    email: string,
    image: string,
    emailVerified: Date | undefined,
  ) {
    super(name, email, image, emailVerified);
  }
}

type UserSchemaType = {
  name: string;
  target: typeof User;
  columns: {
    role?: {
      type: 'varchar';
      nullable: boolean;
      default: string;
    };
    name?: EntitySchemaColumnOptions;
    email?: EntitySchemaColumnOptions;
    image?: EntitySchemaColumnOptions;
    emailVerified?: EntitySchemaColumnOptions;
  };
};

export const UserSchema: UserSchemaType = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    role: {
      type: 'varchar',
      nullable: true,
      default: 'user',
    },
  },
};
