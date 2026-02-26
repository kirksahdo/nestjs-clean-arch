import { Injectable } from '@nestjs/common';
import { IEnvConfig } from './env-config.interface';

@Injectable()
export class EnvConfigService implements IEnvConfig {
  getAppPort(): number {
    throw new Error('Method not implemented.');
  }
  getNodeEnv(): string {
    throw new Error('Method not implemented.');
  }
}
