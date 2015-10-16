import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  path: DS.attr('string'),
  size: DS.attr('string'),
  checksum: DS.attr('string'),
  source_key: DS.attr('string'),
  source_url: DS.attr('string'),
  properties: DS.attr(),
  last_synced_at: DS.attr('date'),
  amazonConnector: DS.belongsTo('amazon-s3-connector', {async: false}),
  boxConnector: DS.belongsTo('box-connector', {async: false})
});
