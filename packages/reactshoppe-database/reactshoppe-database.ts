import { RemovalPolicy, aws_dynamodb as dynamodb, aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TableNames } from './TableNames' 

export class ReactshoppeDatabase extends Construct {
  private orderTable: dynamodb.Table;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.orderTable = new dynamodb.Table(this, TableNames.Order, {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 1,
      writeCapacity: 1,
      tableName: TableNames.Order,
      removalPolicy:RemovalPolicy.DESTROY,
    });
  }

  allowCrud(grantee: iam.IGrantable) {
    this.orderTable.grantReadWriteData(grantee);
  }
};
