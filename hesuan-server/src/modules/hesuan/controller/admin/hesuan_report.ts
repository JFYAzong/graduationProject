import { BaseController, CoolController } from '@cool-midway/core';
import { HesuanReportEntity } from '../../entity/hesuan_report';


@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: HesuanReportEntity,
})
export class HesuanReportController extends BaseController { }