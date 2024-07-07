import { Injectable } from '@nestjs/common';


@Injectable()
export class CatsService {
    
    findAll(): string {
    return 'This action returns all cats';
  }

  findOne( params: any): string {
    return `This action returns a #${params.id} cat`;

  }
  
  
}
