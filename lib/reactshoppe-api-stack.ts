import * as cdk from '@aws-cdk/core';
import { ReactshoppeDatabase } from './reactshoppe-database';

export class ReactshoppeApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new ReactshoppeDatabase(this, 'ReactshoppeDatabase');
  }
}
