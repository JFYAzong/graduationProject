import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 村庄详情
 */
@EntityModel('village_detail')
export class VillageDetailEntity extends BaseEntity {
  @Column({ comment: '村庄名称' })
  name: string;

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

  @Column({ comment: '分组', nullable: true })
  group: string;

  @Column({ comment: '介绍', nullable: true })
  introduction: string;

  @Column({ comment: '户数', nullable: true })
  residence: string;

  @Column({ comment: '户籍人口', nullable: true })
  population: string;

  @Column({ comment: '常住人口', nullable: true })
  permanent: string;

  @Column({ comment: '房屋总数量', nullable: true })
  house: string;

  @Column({ comment: '闲置房屋', nullable: true })
  leave: string;

  @Column({ comment: '闲置占比', nullable: true })
  leaveRaio: string;

  @Column({ comment: '村庄面积(平方千米)', nullable: true })
  area: string;

  @Column({ comment: '自然村开发情况', nullable: true })
  developCondition: string;

  @Column({ comment: '通村公路等级', nullable: true })
  roadLevel: string;

  @Column({ comment: '距最近高速出口距离(公里)', nullable: true })
  distanceToFreeway: string;

  @Column({ comment: '距高铁站距离(公里)', nullable: true })
  distanceToRailway: string;

  @Column({ comment: '距县道、省道最近距离(公里)', nullable: true })
  distanceToHighway: string;

  @Column({ comment: '距县城最近距离(公里)', nullable: true })
  distanceToDistrict: string;

  @Column({ comment: '距乡镇中心距离(公里)', nullable: true })
  distanceToVillage: string;

  @Column('text', { comment: '图片', nullable: true })
  pics: string;

  @Column('text', { comment: '视频', nullable: true })
  videos: string;
}
