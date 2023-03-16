import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 各市旅游资源
 */
@EntityModel('notice_intro')
export class NoticeIntroEntity extends BaseEntity {
  @Column({ comment: '公告id' })
  cid: number;

  @Column({ comment: '公告标题' })
  title: string;

  @Column({ comment: '发布者' })
  author: string;

  @Column({ comment: '发布时间' })
  time: string;

  @Column({ comment: '公告详情' })
  detail: string;

  @Column({ comment: '地点照片', nullable: true })
  pic: string;
}
