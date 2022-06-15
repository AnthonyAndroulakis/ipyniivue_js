from ipywidgets import DOMWidget, ValueWidget
from ipywidgets import Layout
from ipywidgets import register

from traitlets import Unicode, Int
from traitlets import default

# See js/lib/widget.js for the frontend counterpart to this file.

@register
class Niivue(DOMWidget, ValueWidget):
    """An example widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('NiivueView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('NiivueModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('jupyterlab_niivue').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('jupyterlab_niivue').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.

    @default('layout')
    def _default_layout(self):
        return Layout(height='480')
