import { ALL, App, Body, Inject, Param, Post, Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { Context } from '@midwayjs/koa';
import { MiniProgramApi } from 'tnwx'
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
 @Post('/setuser')
 async userInfoPost(@Param() openid: string, avatar: string, wechatName: string):Promise<WechatUsersEntity>{
  //  return this.ctx.request.body
  //把前端返回的微信头像，微信昵称通过openid存入user表中
  openid = await this.ctx.request.body.openid
  wechatName = await this.ctx.request.body.nickName
  avatar = await this.ctx.request.body.avatarUrl
  let user = await this.WechatUsersEntity.findOne({openid})
  user.wechatName = wechatName
  user.avatar = avatar
  user = await this.WechatUsersEntity.save(user)
  return user
 }


 
}