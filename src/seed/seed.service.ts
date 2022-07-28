import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cards.seed';
import { generateFakeListCar } from './utils';


@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
  ) { }

  populateDB() {
    this.carsService.fillCardWithSeedDate(CARS_SEED)
    return {
      'message': 'SEED SUCCESFULLY'
    }
  }

}
