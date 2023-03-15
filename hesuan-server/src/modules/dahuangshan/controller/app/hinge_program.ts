import { BaseController, CoolController } from '@cool-midway/core';
import { HingeProgramEntity } from '../../entity/hinge_program';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: HingeProgramEntity,
})
export class HingeProgramController extends BaseController {}
