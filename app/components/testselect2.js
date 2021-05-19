import Component from '@glimmer/component';
import { action, get } from '@ember/object';

/*
This demonstrates an alternative means for handling nested properties
This DOES WORK as Ember-get returns the same object as was previously set 
*/
export default class TestselectComponent extends Component {
  get selectedItem() {
    return get(this.args.changeset, this.args.propertyName);
  }
  @action
  onChange(newValue) {
    this.args.changeset.set(this.args.propertyName, newValue);
  }
}
