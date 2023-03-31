import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';


@EntityModel('hesuan_report')
export class HesuanReportEntity extends BaseEntity {
  
  @Column({ comment: '姓名' })
  name: string;

  @Column({ comment: '学号' })
  number: string;

  @Column({ comment: '检测医院' })
  hospital: string;

  @Column({ comment: '报告时间' })
  reportTime: string;

  @Column({ comment: '报告结果'})
  reportResult: string;
}
