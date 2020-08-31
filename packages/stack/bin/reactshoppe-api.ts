#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ReactshoppeApiStack } from '../reactshoppe-api-stack';

const app = new cdk.App();
new ReactshoppeApiStack(app, 'ReactshoppeApiStack', { description: 'Simple sample ecommerce service with New Relic' });
