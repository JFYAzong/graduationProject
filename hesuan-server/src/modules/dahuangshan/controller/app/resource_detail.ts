import { BaseController, CoolController } from '@cool-midway/core';
import { ResourceDetailEntity } from '../../entity/resource_detail';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: ResourceDetailEntity,
})
export class ResourceDetailController extends BaseController {}
