import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsServices: CarsService
    ) { }


    @Get()
    getAllCard() {
        return this.carsServices.findAll();
    }

    @Get('/:id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsServices.findOneById(id);
    }

    @Post()
    createCar(@Body() car: any) {
        return {
            ...car
        }
    }

    @Patch('/:id')
    udpateCar(@Param('id', ParseIntPipe) id: number, @Body() car: any) {
        return {
            id,
            ...car
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return id
    }
}
