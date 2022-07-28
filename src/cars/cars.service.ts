import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid'

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            brand: 'toyota',
            id: uuid(),
            model: 'corolla'
        },
        {
            brand: 'honda',
            id: uuid(),
            model: 'civic'
        },
        {
            brand: 'jeep',
            id: uuid(),
            model: 'cherokee'
        }
    ];


    findAll() {
        return {
            total: this.cars.length,
            data: this.cars
        };
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

}
