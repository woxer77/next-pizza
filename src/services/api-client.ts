import { doughTypeService } from './doughType/doughType.service';
import { categoryService } from './category/category.service';
import { ingredientService } from './ingredient/ingredient.service';
import { sizeService } from './size/size.service';

export const API = {
  category: categoryService,
  doughType: doughTypeService,
  ingredient: ingredientService,
  size: sizeService
};
