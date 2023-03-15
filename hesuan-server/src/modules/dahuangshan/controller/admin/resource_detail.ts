import { BaseController, CoolController } from '@cool-midway/core';
import { ResourceDetailEntity } from '../../entity/resource_detail';

@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  pageQueryOp: {
    keyWordLikeFields: ['name', 'village', 'shi', 'xian', 'detailType'],
  },
  entity: ResourceDetailEntity,
})
export class ResourceDetailController extends BaseController {}
