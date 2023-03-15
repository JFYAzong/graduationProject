import { BaseController, CoolController } from '@cool-midway/core';
import { ResourceNumberEntity } from '../../entity/resource_number';

@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: ResourceNumberEntity,
})
export class ResourceNumberController extends BaseController {}
