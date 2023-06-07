import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Cat } from './cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { Model } from 'mongoose';
import { FindCatDto } from './dto/find-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async get(id: string): Promise<Cat> {
    const cat = await this.catModel.findById(id);
    if (!cat) throw new NotFoundException('No data found');
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, { $set: updateCatDto }, { new: true });
  }

  async delete(id: string): Promise<Cat> {
    return this.catModel.findByIdAndDelete(id);
  }

  async findAll(query: FindCatDto): Promise<[Cat[], number, number, number]> {
    const skip = +query.skip || 0;
    const limit = +query.limit || 10;
    const [data, count] = await Promise.all([
      this.catModel.find().skip(skip).limit(limit).exec(),
      this.catModel.count(),
    ]);
    return [data, count, skip, limit];
  }
}
