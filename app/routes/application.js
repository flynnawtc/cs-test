import Route from '@ember/routing/route';
import { Changeset } from 'ember-changeset';
import { inject as service } from '@ember/service';
// import trunk from '../models';
// import branch from '../models';
// import leaf from '../models';

export default class ApplicationRoute extends Route {
  @service('store')
  store;

  constructor(owner, args) {
    super(owner, args);

    let trunk = this.store.createRecord('trunk');
    let branch = this.store.createRecord('branch');
    let leaf1 = this.store.createRecord('leaf', {
      id: 1,
      description: 'leaf 1',
    });
    let leaf2 = this.store.createRecord('leaf', {
      id: 2,
      description: 'leaf 2',
    });
    trunk.branch = branch;

    // let trunk = { branch: { leaf: null } };
    // let leaf1 = {
    //   id: 1,
    //   description: 'leaf 1',
    // };
    // let leaf2 = {
    //   id: 2,
    //   description: 'leaf 2',
    // };

    console.log('trunk before changeset created', trunk);
    console.log('leaf1 before changeset created', leaf1);
    console.log('leaf2 before changeset created', leaf2);

    let cs = Changeset(trunk, null);
    console.log('Before: should be null', cs.get('branch.leaf'));
    cs.set('branch.leaf', leaf1);
    console.log("cs.set('branch.leaf', leaf1);");
    console.log(
      'After first set - should be Leaf1 object',
      cs.get('branch.leaf')
    );
    console.log(
      "After first set - should be 'leaf 1'",
      cs.get('branch.leaf.description')
    );
    console.log(
      "After first set - should be 'leaf 1'",
      cs.get('branch.leaf').description
    );
    console.log(
      "After first set - should be 'leaf 1'",
      cs.get('branch.leaf').get('description')
    );
    let l1 = cs.get('branch.leaf');
    console.log('l1', l1);
    console.log("After first set - should be 'leaf 1'", l1.get('description'));
    console.log("After first set - should be 'leaf 1'", l1.description);

    console.log('After first set changes', cs._changes);

    cs.set('branch.leaf', leaf2);
    console.log("cs.set('branch.leaf', leaf2);");
    console.log(
      'After second set - should be Leaf2 object',
      cs.get('branch.leaf')
    );
    console.log(
      "After second set - should be 'leaf 2'",
      cs.get('branch.leaf.description')
    );
    console.log(
      "After second set - should be 'leaf 2'",
      cs.get('branch.leaf').description
    );
    console.log(
      "After second set - should be 'leaf 2'",
      cs.get('branch.leaf').get('description')
    );
    let l2 = cs.get('branch.leaf');
    console.log('l2', l2);
    console.log("After first set - should be 'leaf 2'", l2.get('description'));
    console.log("After first set - should be 'leaf 2'", l2.description);
    console.log('After second set changes', cs._changes);

  }
}
