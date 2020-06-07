import * as core from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class ReactshoppeDatabase extends core.Construct {
  private orderTable: dynamodb.Table;
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    this.orderTable = new dynamodb.Table(this, TableNames.Order, {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 1,
      writeCapacity: 1,
      tableName: TableNames.Order,
      removalPolicy: core.RemovalPolicy.DESTROY,
    });
  }

  allowCrud(grantee: iam.IGrantable) {
    this.orderTable.grantReadWriteData(grantee);
  }
};

export enum TableNames {
    Order = 'Order'
};
