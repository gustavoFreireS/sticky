var Wrapper = function(el, that) {
	// this._el = el;
	this._el = lokor();

	// this.ports.in = new Array(2);
	// this.ports.out = new Array(2);

	arrangePorts.call(this);

	var main = this._el.getElementById('main');
	main.addEventListener('mousedown', turnDrag.bind(this, true), true);
	main.addEventListener('mouseup', turnDrag.bind(this, false), true);
	main.addEventListener('mouseout', turnDrag.bind(this, false), true);

	main.addEventListener('mousemove', dragMove.bind(this), true);
	//this._svg.addEventListener('mousemove', attachMove.bind(this), true);
};

Wrapper.prototype = {
	_id: null,
	_container: null,
	_ports: {
		// in: null,
		// out: null
		in: [[], [], []],
		out: [[], []]
	},
	get _svg() { return getSvg(this._el); },
  get x () { return this._el.getAttribute('x'); },
  get y () { return this._el.getAttribute('y'); },
	get text () { return this._el.innerHTML; },
  set x (val) { return this._el.setAttribute('x', val); },
  set y (val) { return this._el.setAttribute('y', val); },
	set text (val) { return (this._el.innerHTML = val); },
	_states: {
		dragging: false
	},
	attr: function(key, value) {
		if (value) return this._el.setAttribute(key, value);
		else if (key) return this._el.getAttribute(key);
	},
	detach: function() {
		this._el.parentNode.removeChild(this._el);
		return this;
	},
	_aux: {
		attaching: {},

	},
	arrangePorts: function() {

	},
};

function turnDrag(val, e) {
	this._states.dragging = val;
	if(val) {
		var SVGbox = this._svg.getBoundingClientRect();
		var OffsetX = e.x - SVGbox.left;
		var OffsetY =  e.y - SVGbox.top;
		this._aux.mouseDown = { x: OffsetX - this.x, y: OffsetY - this.y };
	}

}

function dragMove(e) {
	if(this._states.dragging) {
		var SVGbox = this._svg.getBoundingClientRect();
		var OffsetX = e.x - SVGbox.left;
		var OffsetY =  e.y - SVGbox.top;

		var firstState = this._aux.mouseDown;
		this.x = OffsetX - firstState.x;
		this.y = OffsetY - firstState.y;

	}
}

function getSvg(el) {
  if(el.parentNode.nodeName === 'svg') {
      return el.parentNode;
  }
  return getSvg(el.parentNode);
}

function getPosition(el) {

    var elPos = el.getBoundingClientRect();
    var vpPos = getSvg(el).getBoundingClientRect();


    return {
        top: elPos.top - vpPos.top,
        left: elPos.left - vpPos.left,
        width: elPos.width,
        bottom: elPos.bottom - vpPos.top,
        height: elPos.height,
        right: elPos.right - vpPos.left
    };

}

function lokor() {
  var svg = Sticky.createElement('svg');
  var strokeWidth = 3;
  var marginLeft = 10;

  var attrs = {
    x: marginLeft + strokeWidth/2,
    y: strokeWidth/2,
    width: 150,
    height: 50,
    rx: 20,
    ry: 20,
    'stroke-width': strokeWidth,
    style: 'fill: red; stroke: black; opacity: 1',
    id: 'main'
  };

  var rect = Sticky.createElement('rect', attrs);

  // var forei = Sticky.createElement('foreignObject', { width: 100, height: 40 });
  // var body = Sticky.createElement('body', { xmlns: 'http://www.w3.org/1999/xhtml' });
  // var input = Sticky.createElement('input', { type: 'text' });
  // body.appendChild(input);
  // forei.appendChild(body);
  // rect.appendChild(forei);

  svg.appendChild(rect);
  return svg;
}

function arrangePorts() {
	var radius = 10;
	var dist = 10; //distance beetween ports
	var strokeWidth = 3.5;
	var ports = this._ports;
	var port = null;
	var main = this._el.getElementById('main');
	var rectBox = main.getBBox();
	var maxPorts = Math.max(ports.in.length, ports.out.length);
	var Radius = radius + strokeWidth/2; //total radius -> circle radius plus its stroke width
	var tRadius = dist + Radius;
	var height = (dist + Radius * 2) * maxPorts + dist; //dist + diameter * number of ports + final dist
	var width = main.getAttribute('width') * 1;

	main.setAttribute('height', height);

  var attrs = { id: null, r: radius, fill: 'yellow', stroke: 'black', 'stroke-width': strokeWidth };
	var i, y, ds;
	// attrs.cx = margin; attrs.cy = rectBox.height/2;

	ds = height/ports.in.length;
	y = ds/2;

	for (i = 0; i < ports.in.length; i++, y+=ds) {
		port = createPort(i, this, 'in', attrs);
		port.attr('cx', Radius);
		// port.attr('cy', tRadius + i * (2*Radius + dist));
		port.attr('cy', y);
		this._el.appendChild(port);
	}
	//
	ds = height/ports.out.length;
	y = ds/2; //initially get half the distance cuz we drawin a circle, then we increment by the total distance
						//cuz it means the missing half for the previous circle and the initial half for the next circle
						//so every 'y' means one center of circle
	for (i = 0; i < ports.out.length; i++, y+=ds) {
		console.log(test);

		port = createPort(i, this, 'out', attrs);
		port.attr('cx', width + Radius);
		// port.attr('cy', tRadius + i * (2*Radius + dist));
		port.attr('cy', y);
		this._el.appendChild(port);
	}

}

function createPort(id, owner, dir, attrs) {
	if(['in','out'].indexOf(dir) === -1) throw 'port direction must be \'in\' or \'out\'';
	var port = Sticky.createElement('circle', attrs);
	port.id = id;
	port.owner = owner;
	port.type = 'port';
	port.dir = dir; //dir -> direction, not directory

	port.attr = function(key, value) {
		if(value) return this.setAttribute(key, value);
		else return this.getAttribute(key);
	};

	return port;
}
