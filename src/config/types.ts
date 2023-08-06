import { IsIn, IsPort, IsString, ValidateNested } from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class HttpConfig {
  @IsString()
  host: string;

  @IsPort()
  port: number;
}

// define your configs here
export class Configuration {
  // @IsEnum(Environment) fix: throws an error every time
  @IsIn([Environment.Development, Environment.Production, Environment.Test])
  environment: Environment;

  @ValidateNested()
  http: HttpConfig;

  // add your configs here
}
