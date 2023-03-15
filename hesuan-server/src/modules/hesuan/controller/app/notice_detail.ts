import { BaseController, CoolController } from '@cool-midway/core';
import { NoticeDetailEntity } from '../../entity/notice_detail';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: NoticeDetailEntity,
})
export class NoticeDetailController extends BaseController {}