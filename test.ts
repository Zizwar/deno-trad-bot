//technicalindicators
import { technicalindicators } from './deps.ts';
const {SMA} = technicalindicators;
console.info(SMA.calculate({ period: 5, values: [1, 2, 3, 4, 5, 6, 7, 8, 9] }))