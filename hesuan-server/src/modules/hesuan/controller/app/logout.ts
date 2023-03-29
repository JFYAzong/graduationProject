import { ALL, App, Body, Inject, Param, Post, Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { Context } from '@midwayjs/koa';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import { WechatUsersEntity } from '../../entity/wechat_users';

@Provide()
@CoolController()
export class UserInfoController extends BaseController {
  @InjectEntityModel(WechatUsersEntity)
  WechatUsersEntity: Repository<WechatUsersEntity>;  
  
  @Inject()
    ctx: Context;


 /**
   * 新增
   * @param params
   */
 @Post('/logout')
 async userInfoPost(@Param() openid: string):Promise<WechatUsersEntity>{
  //将微信的昵称和头像清空
  openid = await this.ctx.request.body.openid
  let user = await this.WechatUsersEntity.findOne({openid})
  user.avatar = undefined
  user.wechatName = undefined
  user = await this.WechatUsersEntity.save(user)
  return user
 }


 
}