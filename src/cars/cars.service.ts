import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            brand: 'toyota',
            id: 1,
            model: 'corolla'
        },
        {
            brand: 'honda',
            id: 2,
            model: 'civic'
        },
        {
            brand: 'jeep',
            id: 3,
            model: 'cherokee'
        }
    ];


    findAll() {
        return {
            total: this.cars.length,
            data: this.cars
        };
    }

    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

}
