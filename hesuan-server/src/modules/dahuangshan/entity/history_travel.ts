import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 历年旅游指数
 */
@EntityModel('history_travel')
export class HistoryTravelEntity extends BaseEntity {
  @Column({ comment: '分类 0-示范区 1-核心区', type: 'tinyint', default: 0 })
  type: number;

  @Column({ comment: '年份' })
  year: number;

  @Column({ comment: '入境人数（万人次）' })
  population: number;

  @Column({ comment: '收入（亿美元）' })
  income: number;
}
