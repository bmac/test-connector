import DS from 'ember-data';

export default DS.Model.extend({
  access_key: DS.attr('string'),
  secret_access_key: DS.attr('string'),
  bucket_name: DS.attr('string'),
  region: DS.attr('string', {defaultValue: 'us-east-1'}),
  prefix: DS.attr('string'),
  delimiter: DS.attr('string'),
  name: DS.attr('string'),
  last_synced_at: DS.attr('date'),
  status_message: DS.attr('string'),
  items: DS.hasMany('item', {async: true, inverse: 'amazonConnector'}),
  validations: {
    'access_key': {
      presence: true
    },
    'secret_access_key': {
      presence: true
    },
    'bucket_name': {
      presence: true
    }
  },
});
