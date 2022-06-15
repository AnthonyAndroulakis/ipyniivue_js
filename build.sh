python setup.py build
pip install -e .

jupyter nbextension install --py --symlink --sys-prefix jupyterlab_niivue
jupyter nbextension enable --py --sys-prefix jupyterlab_niivue