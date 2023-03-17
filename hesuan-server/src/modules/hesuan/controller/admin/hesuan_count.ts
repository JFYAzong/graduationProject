import { BaseController, CoolController } from '@cool-midway/core';
import { HesuanCountEntity } from '../../entity/hesuan_count';


@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: HesuanCountEntity,
})
export class HesuanCountController extends BaseController { }
