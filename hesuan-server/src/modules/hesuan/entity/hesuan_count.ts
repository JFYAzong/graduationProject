import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 各市旅游资源
 */
@EntityModel('hesuan_count')
export class HesuanCountEntity extends BaseEntity {
  
  @Column({ comment: '已做' })
  done: number;

  @Column({ comment: '未做' })
  undone: number;

  @Column({ comment: '阴性' })
  negative: number;

  @Column({ comment: '阳性' })
  positive: number;
}
