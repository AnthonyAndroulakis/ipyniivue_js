var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyterlab_niivue:plugin',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyterlab_niivue',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

