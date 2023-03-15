import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 枢纽数量
 */
@EntityModel('hinge_program')
export class HingeProgramEntity extends BaseEntity {
  @Column({ comment: '分类 0-示范区 1-核心区', type: 'tinyint', default: 0 })
  type: number;

  @Column({ comment: '火车站' })
  railwayStation: number;

  @Column({ comment: '机场' })
  airport: number;

  @Column({ comment: '高速收费站' })
  tollGate: number;

  @Column({ comment: '客运站' })
  passengerStation: number;

  @Column({ comment: '航运站' })
  airStation: number;
}
