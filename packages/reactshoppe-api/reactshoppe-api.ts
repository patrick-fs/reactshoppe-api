import { Cors, LambdaRestApi } from '@aws-cdk/aws-apigateway';
import * as core from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class ReactshoppeApi extends core.Construct {
  private _handler: lambda.Function;
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    this._handler = new lambda.Function(this, 'ApiHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('./packages/functions'), // this path is relative to the project root
      handler: 'entrypoint.main',
    });

    new LambdaRestApi(this, 'reactshoppe-api',  {
      restApiName: 'Reactshoppe',
      handler: this._handler,
      defaultCorsPreflightOptions: {
        allowMethods: Cors.ALL_METHODS,
        allowOrigins: Cors.ALL_ORIGINS,
      }
    });
  }

  get handler(): lambda.Function {
    return this._handler;
  }
}
