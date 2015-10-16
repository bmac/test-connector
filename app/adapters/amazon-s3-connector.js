import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(modelName, id, snapshot, requestType, query) {
    switch (requestType) {
    case 'query':
      return '/connectors';
    case 'findRecord':
      return '/api/connectors/' + id;
    case 'createRecord':
      return '/connectors/amazon_s3';
    case 'findAll':
      return'/connectors';
    default:
      return this._super(modelName, id, snapshot, requestType, query);
    }
  }
});
