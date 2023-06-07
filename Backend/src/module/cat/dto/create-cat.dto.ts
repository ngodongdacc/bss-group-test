import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Tom',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'number',
    example: 1,
  })
  age: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Tai cụp',
  })
  breed: string;
}
