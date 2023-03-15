import { BaseController, CoolController } from '@cool-midway/core';
import { CityTripEntity } from '../../entity/city_trip';

@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: CityTripEntity,
})
export class CityTripController extends BaseController {}
