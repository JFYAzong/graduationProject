import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 旅游资源详情
 */
@EntityModel('resource_detail')
export class ResourceDetailEntity extends BaseEntity {
  @Column({ comment: '资源名' })
  name: string;

  @Column({ comment: '介绍', nullable: true })
  introduction: string;

  @Column({ comment: '资源分类', nullable: true })
  type: string;

  @Column({ comment: '资源具体类型', nullable: true })
  detailType: string;

  @Column({ comment: '市', nullable: true })
  shi: string;

  @Column({ comment: '县', nullable: true })
  xian: string;

  @Column({ comment: '所属乡（镇）', nullable: true })
  village: string;

  @Column({ comment: '经度', nullable: true })
  longitude: string;

  @Column({ comment: '纬度', nullable: true })
  latitude: string;

  @Column({ comment: '是否完全位于生态保护红线内', nullable: true })
  protect: string;

  @Column({ comment: '是否在自然公园内', nullable: true })
  park: string;

  @Column({ comment: '基本情况（优势特点）', nullable: true })
  merit: string;

  @Column({ comment: '适合开发类型', nullable: true })
  developType: string;

  @Column({ comment: '产权属性', nullable: true })
  propertyRight: string;

  @Column({ comment: '面积（平方米）', nullable: true })
  areaNumber: string;

  @Column({ comment: '年代', nullable: true })
  year: string;

  @Column({ comment: '其他', nullable: true })
  other: string;

  @Column('text', { comment: '图片', nullable: true })
  pics: string;

  @Column('text', { comment: '视频', nullable: true })
  videos: string;
}
