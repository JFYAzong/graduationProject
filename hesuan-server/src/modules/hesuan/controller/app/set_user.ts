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
 @Post('/setuser')
 async userInfoPost(@Param() openid: string, avatar: string, wechatName: string, userName:string, userNumber: string, department: string):Promise<WechatUsersEntity>{
  //  return this.ctx.request.body
  openid = await this.ctx.request.body.openid
  wechatName = await this.ctx.request.body.nickName
  avatar = await this.ctx.request.body.avatarUrl
  userName = await this.ctx.request.body.userName
  userNumber = await this.ctx.request.body.userNumber
  department = await this.ctx.request.body.department
  let user = await this.WechatUsersEntity.findOne({openid})
  //把前端返回的微信头像，微信昵称存入user表中
  if(wechatName && avatar){
    user.wechatName = wechatName
    user.avatar = avatar
  }
  //把前端返回的用户姓名，学号，院系存入user表中
  if(userName && userNumber && department){
    user.userName = userName
    user.userNumber = userNumber
    user.department = department
  }
  user = await this.WechatUsersEntity.save(user)
  return user
 }


 
}