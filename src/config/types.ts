import { IsPort, IsString, ValidateNested } from 'class-validator';

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
  // @IsEnum(Environment) fixme: property environment has failed constraint isEnum
  environment: Environment;

  @ValidateNested()
  http: HttpConfig;

  // add your configs here
}
