import { BaseController, CoolController } from '@cool-midway/core';
import { PointResourceEntity } from '../../entity/point_resource';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: PointResourceEntity,
})
export class PointResourceController extends BaseController {}
