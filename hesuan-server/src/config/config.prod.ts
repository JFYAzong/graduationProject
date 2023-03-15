import { MidwayConfig } from '@midwayjs/core';
import { MODETYPE } from '@cool-midway/file';
import { CoolConfig } from '@cool-midway/core';

/**
 * 本地开发 npm run dev 读取的配置文件
 */
export default {
  staticFile: {
    dirs: {
      another: {
        prefix: '/pre',
        dir: '/Users/illuz/temp/files/中文2',
      },
    },
  },
  midwayLogger: {
    default: {
      dir: '/usr/logs',
    },
  },
  cool: {
    initDB: false,
    file: {
      // 上传模式 本地上传或云存储
      mode: MODETYPE.LOCAL,
      // 本地上传 文件地址前缀，当且仅当mode为LOCAL时生效
      domain: '',
    },
  } as CoolConfig,
} as MidwayConfig;
