// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CarDataModel } = initSchema(schema);

export {
  CarDataModel
};