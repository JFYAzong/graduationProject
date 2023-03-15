import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 各市旅游资源
 */
@EntityModel('city_trip')
export class CityTripEntity extends BaseEntity {
  @Column({ comment: '黄山市' })
  huangshan: number;

  @Column({ comment: '池州市' })
  chizhou: number;

  @Column({ comment: '宣城市' })
  xuancheng: number;

  @Column({ comment: '安庆市' })
  anqing: number;
}
