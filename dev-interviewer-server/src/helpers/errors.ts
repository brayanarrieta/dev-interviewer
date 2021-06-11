import { HTTP_STATUS_CODES } from '../constants/enums';

export class ServiceError extends Error {
  token: string;

  status: number;

  constructor(options: any) {
    if (options instanceof Object) {
      const { token, status, ...properties } = options;

      super(options.token);
      this.token = token;
      this.status = status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;

      Object.assign(this, properties);
    } else {
      super(options);
      this.token = options;
      this.status = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    }
  }
}
