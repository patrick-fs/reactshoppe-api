import { aws_apigateway as apigateway, aws_lambda as lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { headers } from 'functions/response';

export class ReactshoppeApi extends Construct {
  private handler: lambda.Function;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.handler = new lambda.Function(this, 'ApiHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('./packages/functions'), // this path is relative to the project root
      handler: 'entrypoint.main',
    });

    new apigateway.LambdaRestApi(this, 'reactshoppe-api',  {
      restApiName: 'Reactshoppe',
      handler: this.handler,
      defaultCorsPreflightOptions: {
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowHeaders: headers,
      }
    });
  }

  getHandler() {
    return this.handler;
  }
}
