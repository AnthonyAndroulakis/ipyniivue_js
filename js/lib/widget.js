var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var Niivue = require('@niivue/niivue');

// See widget.py for the kernel counterpart to this file.


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var NiivueModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'NiivueModel',
        _view_name : 'NiivueView',
        _model_module : 'jupyterlab_niivue',
        _view_module : 'jupyterlab_niivue',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
    })
});


// Custom View. Renders the widget model.
var NiivueView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        this._niivueCanvas = document.createElement('canvas');
        //this._niivueCanvas.setAttribute('id', 'niivuegl');
        this.el.appendChild(this._niivueCanvas);
        this.el.classList.add('custom-widget');

        const nv = new Niivue();
        nv.attachToCanvas(this._niivueCanvas);

        this._niivueInput.height = 480;

        //const volumeList = [
        //  {
        //    url: 'https://niivue.github.io/niivue/images/mni152.nii.gz',
        //    volume: { hdr: null, img: null },
        //    name: 'mni152',
        //    colorMap: 'freesurfer',
        //    opacity: 1,
        //    visible: true,
        //  },
        //];

        //nv.loadVolumes(volumeList);

    }
});


module.exports = {
    NiivueModel: NiivueModel,
    NiivueView: NiivueView
};
