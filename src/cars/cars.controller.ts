import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos'

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
        return this.carsServices.create(createCardDto);
    }

    @Patch('/:id')
    udpateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
        return this.carsServices.udpate(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsServices.delete(id);
    }
}
