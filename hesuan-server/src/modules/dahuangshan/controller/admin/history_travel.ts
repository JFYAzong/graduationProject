import { BaseController, CoolController } from '@cool-midway/core';
import { HistoryTravelEntity } from '../../entity/history_travel';

@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: HistoryTravelEntity,
})
export class HistoryTraveController extends BaseController {}
