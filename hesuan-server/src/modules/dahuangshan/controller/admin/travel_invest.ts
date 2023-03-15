import { BaseController, CoolController } from '@cool-midway/core';
import { TravelInvestEntity } from '../../entity/travel_invest';

@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: TravelInvestEntity,
})
export class TravelInvestController extends BaseController {}
