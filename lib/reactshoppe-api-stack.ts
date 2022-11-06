import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ReactshoppeApi } from 'reactshoppe-api';
import { ReactshoppeDatabase } from 'reactshoppe-database';

export class ReactshoppeApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const api = new ReactshoppeApi(this, 'ReactshoppeApi');
    const db = new ReactshoppeDatabase(this, 'ReactshoppeDatabase');

    // commenting this out will deliberately break service for New Relic demo
    // db.allowCrud(api.getHandler());
  }
}
