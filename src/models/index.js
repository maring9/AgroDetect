// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccountType = {
  "BASIC": "BASIC",
  "PREMIUM": "PREMIUM"
};

const { User, Inference } = initSchema(schema);

export {
  User,
  Inference,
  AccountType
};