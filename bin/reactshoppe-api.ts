#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { ReactshoppeApiStack } from '../lib/reactshoppe-api-stack';

const app = new App();
new ReactshoppeApiStack(app, 'ReactshoppeApiStack', { description: 'Simple sample ecommerce service with New Relic' });
