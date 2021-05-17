import Model from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class BranchModel extends Model {
  @belongsTo('leaf')
  leaf;
}
