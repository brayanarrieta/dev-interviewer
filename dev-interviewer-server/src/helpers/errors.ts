export class ServiceError extends Error {
  token: string;

  constructor(options: any) {
    if (options instanceof Object) {
      const { token, ...properties } = options;

      super(options.token);
      this.token = token;

      Object.assign(this, properties);
    } else {
      super(options);
      this.token = options;
    }
  }
}
