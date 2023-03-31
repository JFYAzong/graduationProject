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
 @Post('/getopenid')
 async getOpenId(@Param() openid: string): Promise<WechatUsersEntity>{
   openid = (await MiniProgramApi.code2Session('wx94365389ae67e384','e5eb0ee2f4e93080e05bc90234e4079b',this.ctx.request.body.code)).openid
   //openid查询user表，没有就创建然后查询返回，有就查询返回。
  //  console.log(openid)
   let user = await this.WechatUsersEntity.findOne({openid})
   if(!user){
    user = await this.WechatUsersEntity.save({openid})
   }
   return user
 }


 
}