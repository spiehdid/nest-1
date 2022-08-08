import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  @Min(0)
  newsId: number;

  @IsString()
  text: string;
}
