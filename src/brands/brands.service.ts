import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      createAt: new Date().toISOString(),
      id: uuid(),
      name: 'Lexus',
    }
  ]



  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createAt: new Date().toISOString()
    }

    this.brands.push(brand)

    return this.brands
  }

  findAll() {
    return {
      total: this.brands.length,
      docs: this.brands
    }
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id)
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`)
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    const brandDB = this.findOne(id)

    return this.brands.map(brand => {

      if (brand.id === id) {
        brandDB.updatedAt = new Date().toISOString()
        return {
          ...brandDB,
          ...updateBrandDto
        }

      }

      return brand

    })


  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
