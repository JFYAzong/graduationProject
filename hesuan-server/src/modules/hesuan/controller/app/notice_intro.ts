import { BaseController, CoolController } from '@cool-midway/core';
import { NoticeIntroEntity } from '../../entity/notice_intro';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: NoticeIntroEntity,
})
export class NoticeIntroController extends BaseController {}
