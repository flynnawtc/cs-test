import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class LeafModel extends Model {
  @attr('string')
  description;
}
