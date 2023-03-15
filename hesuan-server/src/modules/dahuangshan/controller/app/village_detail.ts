import { BaseController, CoolController } from '@cool-midway/core';
import { VillageDetailEntity } from '../../entity/village_detail';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: VillageDetailEntity,
})
export class VillageDetailController extends BaseController {}
