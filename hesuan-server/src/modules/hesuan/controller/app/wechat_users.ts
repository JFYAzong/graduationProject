import { BaseController, CoolController } from '@cool-midway/core';
import { WechatUsersEntity } from '../../entity/wechat_users';

@CoolController({
  api: ['info', 'page', 'list'],
  entity: WechatUsersEntity,
})
export class WechatUsersController extends BaseController {}
