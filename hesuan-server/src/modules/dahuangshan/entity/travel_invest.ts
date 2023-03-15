import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 旅行投资规模
 */
@EntityModel('travel_invest')
export class TravelInvestEntity extends BaseEntity {
  @Column({ comment: '招商项目' })
  attractProgram: number;

  @Column({ comment: '在建项目' })
  buildProgram: number;

  @Column({ comment: '招商金额' })
  attractCost: number;

  @Column({ comment: '在建金额' })
  buildCost: number;
}
