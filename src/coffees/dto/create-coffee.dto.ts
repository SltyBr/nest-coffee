import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({
    description: 'name coffee',
  })
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: Array<string>;
}
