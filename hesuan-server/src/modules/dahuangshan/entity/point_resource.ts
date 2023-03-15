import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 景区资源
 */
@EntityModel('point_resource')
export class PointResourceEntity extends BaseEntity {
  @Column({ comment: '分类 0-示范区 1-核心区', type: 'tinyint', default: 0 })
  type: number;

  @Column({ comment: '国家全域旅游示范区' })
  nationCount: number;

  @Column({ comment: '省级旅游度假区' })
  provinceCount: number;

  @Column({ comment: '5A级景区' })
  fiveACount: number;

  @Column({ comment: '4A级景区' })
  fourACount: number;
}
