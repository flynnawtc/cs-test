import Model from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class TrunkModel extends Model {
  @belongsTo('branch')
  branch;
}
