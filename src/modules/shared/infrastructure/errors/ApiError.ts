interface ErrorOptions {
  cause: any;
}

export class ApiError extends Error {
  cause: any;

  constructor(message: string, options?: ErrorOptions) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;

    if (options?.cause) {
      this.cause = options.cause;
    }
  }
}
