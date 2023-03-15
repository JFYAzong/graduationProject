import { CoolConfig } from '@cool-midway/core';
import { MODETYPE } from '@cool-midway/file';
import { MidwayConfig } from '@midwayjs/core';
// import * as redisStore from 'cache-manager-ioredis';
import * as fsStore from 'cache-manager-fs-hash';

export default {
  // 修改成你自己独有的key
  keys: 'HekI4GcVUE1t8ypabx',
  koa: {
    port: 8000,
  },
  // 文件上传
  upload: {
    fileSize: '2000mb',
    whitelist: null,
  },
  // 模板渲染
  view: {
    mapping: {
      '.html': 'ejs',
    },
  },
  // 本地缓存
  cache: {
    store: fsStore,
    options: {
      path: 'cache',
      ttl: -1,
    },
  },
  orm: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'root',
    // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
    synchronize: false,
    // 打印日志
    logging: false,
    // 字符集
    charset: 'utf8mb4',
  },
  // redis缓存
  //   cache: {
  //     store: redisStore,
  //     options: {
  //       host: '127.0.0.1',
  //       port: 6379,
  //       password: '',
  //       db: 1,
  //       ttl: null,
  //     },
  //   },
  // cool配置
  cool: {
    // redis: {
    //   host: '127.0.0.1',
    //   port: 6379,
    //   db: 0,
    // },
    // 是否自动导入数据库
    file: {
      // 上传模式 本地上传或云存储
      mode: MODETYPE.LOCAL,
      // 本地上传 文件地址前缀，当且仅当mode为LOCAL时生效
      domain: 'http://127.0.0.1:8000',
    },
  } as CoolConfig,
} as
  | MidwayConfig
  | {
      cache: any;
    };
