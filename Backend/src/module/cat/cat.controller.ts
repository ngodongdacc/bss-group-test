import {
  All,
  Body,
  Controller,
  Delete,
  Get,
  Next,
  Param,
  Patch,
  Post,
  Query,
  Request,
  Response,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { CatService } from './cat.service';
import { FindCatDto } from './dto/find-cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { Types } from 'mongoose';
import { UpdateCatDto } from './dto/update-cate.dto';

@ApiTags('cat')
@Controller()
@UseInterceptors(TransformInterceptor)
export class CatController {
  constructor(private readonly catService: CatService) {}

  @All('/:id')
  @ApiOperation({ summary: 'Returns a cat' })
  async checkId(@Param('id') id: string, @Request() req: any, @Next() next: any) {
    const cat = await this.catService.get(id);
    req.cat = cat;
    next();
  }
  @Patch('/:id')
  @ApiOperation({ summary: 'Returns a cat' })
  updateCat(@Param('id') id: string, @Body() body: UpdateCatDto) {
    return this.catService.update(id, body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Returns a cat' })
  deleteCat(@Param('id') id: string) {
    return this.catService.delete(id);
  }

  @Post()
  @ApiOperation({ summary: 'Returns a cat' })
  createCat(@Body() body: CreateCatDto) {
    return this.catService.create(body);
  }
  @Get()
  @ApiOperation({ summary: 'Returns a list of cats' })
  getAllCat(@Query() query: FindCatDto) {
    return this.catService.findAll(query);
  }
}
