import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 各类资源数量
 */
@EntityModel('resource_number')
export class ResourceNumberEntity extends BaseEntity {
  @Column({
    comment: '分类 0-全部 1-黄山市 2-安庆市 3-池州市 4-宣城市',
    type: 'tinyint',
    default: 0,
  })
  type: number;

  @Column({ comment: '其他类' })
  other: number;

  @Column({ comment: '创意创造类' })
  originality: number;

  @Column({ comment: '会展经济类' })
  economy: number;

  @Column({ comment: '医养康养类' })
  medical: number;

  @Column({ comment: '体育类赛事' })
  sport: number;

  @Column({ comment: '旧建筑、废弃地' })
  oldFacility: number;
}
