import { BaseController, CoolController } from '@cool-midway/core';
import { TripTypeEntity } from '../../entity/trip_type';

@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: TripTypeEntity,
})
export class TripTypeController extends BaseController {}
