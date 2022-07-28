import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsServices: CarsService
    ) { }


    @Get()
    getAllCard() {
        return this.carsServices.findAll();
    }

    @Get('/:id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsServices.findOneById(id);
    }

    @Post()
    createCar(@Body() createCardDto: CreateCarDto) {
        return {
            ...createCardDto
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
