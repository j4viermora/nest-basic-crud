import { Car } from "src/cars/interfaces/car.interfaces";
import { faker } from '@faker-js/faker'
import { v4 as uuid } from 'uuid'



export const generateFakeListCar = (quantity: number): Car[] => {
    let data: any[] = []
    for (let i = 0; i < quantity; i++) {
        data[i] = {
            id: uuid(),
            brand: faker.fake('brand model'),
            model: faker.random.word()
        }
    }
    return data
}