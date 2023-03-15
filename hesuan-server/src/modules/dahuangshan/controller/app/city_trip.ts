import { BaseController, CoolController } from '@cool-midway/core';
import { CityTripEntity } from '../../entity/city_trip';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: CityTripEntity,
})
export class CityTripController extends BaseController {}
