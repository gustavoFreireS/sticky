import React from 'react';
import ReactDOM from 'react-dom';
import get from 'lodash/get';
import set from 'lodash/set';
import forEach from 'lodash/forEach';

import { SVGContainer } from './blockBuilder';
import { getParentSvg } from './utils';
import { Node } from './react/components';

const defaultConfig = {
  x: 0,
  y: 0,
  strokeWidth: 3,
  marginLeft: 0,
  width: 90,
  opacity: 1,
  height: 50,
  rx: 20,
  ry: 20,
  fill: '#1F8244',
  stroke: '#000000',
  gui: {},
}

export default class Brick {
  constructor (custom = {}) {
    const cfg = { ...defaultConfig, ...custom };
    const { behavior, title, ports, icon, gui, id, x, y, inputs } = cfg;

    this._refNode = id;
    this._container = null;
    this._el = SVGContainer(this, cfg);
    this.behavior = behavior;
    this.cfg = cfg;
    this.gui = Object.assign({}, gui);
    this.inputs = Object.assign({}, gui);
    this.values = inputs || {};
    this.inputs = inputs || {};
    this.x = x || 0;
    this.y = y || 0;
    this._ports = {
      in: [],
      out: [],
      flow_in: [],
      flow_out: [],
    };
    this.wires = [];
    this._states = { dragging: false };

    // TODO(ja0n): Refactor the gui|inputs|values mess
    forEach(inputs, (value, id) => {
      set(this.gui, [id, 'initialValue'], value);
      set(this.gui, [id, 'value'], value);
    });

    const onChange = ({ id, value }) => {
      set(this.inputs, [id], value);
      this.inputs = { ...this.inputs, [id]: value };
    }
    this.onChange = onChange;

    console.debug('ports', ports);

    // ReactDOM.render(<Node {...props} />, this._el);
    return this;
  }

  get data () { return this.behavior(); }
  get main () { return this._el.querySelector('#main'); }
  get _svg () { return getParentSvg(this._el); }

  delete () {
    for (let wire of [...this.wires])
      wire.delete();

    this._el.parentNode.removeChild(this._el);
  }

  updateWires (offset, zoom) {
    this.wires.forEach( wire => wire.render(offset, zoom) );
  }

  getValue (id) {
    var args = [];
    var In = this._ports.in;

    // const args = this._ports.in.reduce()
    for (let i = 0; i < In.length; i++) {
      args.push([]);
      for (let j = 0; j < In[i].length; j++)
        args[i].push(In[i][j].value());
    }

    if (id) return (this._behavior(args))[id];
    else    return this._behavior(args);
  }

}