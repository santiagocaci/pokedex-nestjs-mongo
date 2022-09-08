import {
  IsPositive,
  IsInt,
  MinLength,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';

export class CreatePokemonDto {
  @IsPositive()
  @IsInt()
  @Min(1)
  no: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;
}
