import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 出行方式占比
 */
@EntityModel('trip_type')
export class TripTypeEntity extends BaseEntity {
  @Column({ comment: '飞机' })
  plane: number;

  @Column({ comment: '火车' })
  train: number;

  @Column({ comment: '自驾' })
  drive: number;

  @Column({ comment: '轮船' })
  ship: number;
}
