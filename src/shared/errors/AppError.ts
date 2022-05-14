export class AppError {
    //readonly method;
    public readonly type: string;
    public readonly message: string;  
    public readonly statusCode: number;
  
    constructor(type: string, message: string, statusCode = 400) {
      this.type = type;
      this.message = message;
      this.statusCode = statusCode;
    };
  };
  