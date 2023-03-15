import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 各市旅游资源
 */
@EntityModel('notice_detail')
export class NoticeDetailEntity extends BaseEntity {
  @Column({ comment: '公告id' })
  cid: number;

  @Column({ comment: '公告详情' })
  detail: string;

}
