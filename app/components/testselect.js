import Component from '@glimmer/component';
import { action } from '@ember/object';

/*
This demonstrates the 'recommended' use of changeset-get for nested properties
This DOES NOT WORK as changeset-get does not return the same object as was previously set (selected item is not displayed)
*/
export default class TestselectComponent extends Component {
  @action
  onChange(newValue) {
    this.args.changeset.set(this.args.propertyName, newValue);
  }
}
