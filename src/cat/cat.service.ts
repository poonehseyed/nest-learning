import { Injectable } from '@nestjs/common';
import { CatDto } from './cat.dto';


@Injectable()
export class CatsService {

    // const cats: CatDto[] = [
  private readonly cats: CatDto[] = [
    { id: 1, name: 'Whiskers', age: 3, breed: 'Persian', color: 'White' },
    { id: 2, name: 'Mittens', age: 5, breed: 'Tabby', color:'Grey' },
    { id: 3, name: 'Snowball', age: 2, breed: 'Siamese',color:'None' },
];
    
  
    findAll(): CatDto[] {
      return this.cats;
    }

  findOne( id: number): CatDto {
    return this.cats.find(cat => cat.id === id);

  }
  
  
}
