import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('amazon-s3-connector', params.id);
  }
});
