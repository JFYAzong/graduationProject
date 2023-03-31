import { BaseController, CoolController } from '@cool-midway/core';
import { Inject, Param, Post, Provide } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { HesuanReportEntity } from '../../entity/hesuan_report';

@Provide()
@CoolController({
  api: ['info', 'page', 'list'],
  entity: HesuanReportEntity,
})
export class  HesuanReportController extends BaseController {
  @InjectEntityModel(HesuanReportEntity)
  HesuanReportEntity: Repository<HesuanReportEntity>;  
  
  @Inject()
    ctx: Context;


 /**
   * 新增
   * @param params
   */
 @Post('/getUserReport')
 async getUserReport(@Param() number:string):Promise<HesuanReportEntity>{
  //根据学号查询核酸报告
  number = await this.ctx.request.body.number
  // const report = _.orderBy((await this.HesuanReportEntity.find({number})),['reportTime'],['asc'])
  const report = await this.HesuanReportEntity.find({number})
  if(!report){
    throw new Error('reports not found')
  }
  return report
 }
}
