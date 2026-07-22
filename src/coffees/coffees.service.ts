import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffess: Array<Coffee> = [
    {
      id: 1,
      name: 'Shipwreck roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffess;
  }

  findOne(id: string) {
    const coffee = this.coffess.find((item) => item.id === +id);

    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
      // throw new HttpException(
      //   `Coffee with id ${id} not found`,
      //   HttpStatus.NOT_FOUND,
      // );
    }

    return coffee;
  }

  createCoffee(createCoffeeDto: any) {
    this.coffess.push(createCoffeeDto);

    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {}
  }

  remove(id: string) {
    const coffeeIndex = this.coffess.findIndex((item) => item.id === +id);

    if (coffeeIndex >= 0) {
      this.coffess.splice(coffeeIndex, 1);
    }
  }
}
