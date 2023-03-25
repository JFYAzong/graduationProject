import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';


@EntityModel('wechat_users')
export class WechatUsersEntity extends BaseEntity {
  
  @Column({ comment: '用户登录凭证' })
  openid: string;

  @Column({ comment: '微信头像' , nullable: true})
  avatar: string;

  @Column({ comment: '微信昵称', nullable: true })
  wechatName: string;

  @Column({ comment: '姓名', nullable: true })
  userName: string;

  @Column({ comment: '学号', nullable: true })
  userNumber: string;

  @Column({ comment: '院系', nullable: true })
  department: string;
}
