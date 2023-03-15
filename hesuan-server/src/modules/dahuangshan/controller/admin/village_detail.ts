import { BaseController, CoolController } from '@cool-midway/core';
import { VillageDetailEntity } from '../../entity/village_detail';

@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  pageQueryOp: {
    keyWordLikeFields: ['name', 'village', 'shi', 'xian'],
  },
  entity: VillageDetailEntity,
})
export class VillageDetailController extends BaseController {}
