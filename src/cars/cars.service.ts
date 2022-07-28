import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos';

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

    create(car: CreateCarDto) {
        this.cars.push({
            id: uuid(),
            ...car
        });
        return this.cars[this.cars.length - 1];
    }

    udpate(id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException('Car id no valid')
        }

        this.cars.map(car => {

            if (car.id === id) {
                return {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
            }
            return car;
        })




        return carDB;
    }


    delete(id: string) {
        this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

}
