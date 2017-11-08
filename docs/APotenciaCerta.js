(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"APotenciaCerta_atlas_", frames: [[459,422,278,228],[0,0,600,420],[0,422,457,304]]}
];


// symbols:



(lib.capa = function() {
	this.spriteSheet = ss["APotenciaCerta_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.capa_normal = function() {
	this.spriteSheet = ss["APotenciaCerta_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.imagemmotor = function() {
	this.spriteSheet = ss["APotenciaCerta_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Alayoufundo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#41B9F0").s().p("AkOB8QgDgHgBgMIAAigQABgLAEgFQAFgFAIAAQAIAAAFAFQAEAGAAAKIAAAEQAMgNALgGQALgGAOAAQASAAAOAJQAPAJAIARQAJARgBAYQAAAQgEAOQgFAPgJAJQgIAKgMAFQgMAGgNAAQgQAAgLgHQgKgGgLgNIAAA4QAAAZgRAAQgLAAgDgGgAjigkQgLAMAAAYQAAAVALANQALAMAPAAQAKAAAHgGQAJgFAEgLQAFgLAAgOQAAgPgEgKQgFgLgIgFQgIgGgKAAQgPAAgLAMgABfB2QAAgBABAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIAHABIAKAAQAZAAAAgLQgBgFgEgCQgDgDgGAAIgGAAIgGABQgEAAgCgDQgBgCAAgDQgBgHAUgDQghgBgSgUQgRgUgBghQABgWAIgRQAKgSAQgKQARgJAYAAQAOAAAMAEQAMAEAJAHQAIAHAEAHQAFAIAAAGQgBAHgEAFQgGAEgGAAQgIAAgEgHQgJgMgHgGQgIgGgMAAQgRAAgKANQgKANAAAWQAAAKADAJQACAJAFAGQAFAGAHADQAHAEAJAAQALAAAHgFQAGgEAHgKIAJgMQADgEAHAAQAGAAAFAFQAEAFAAAGQABAKgIAKQgHALgOAHQgPAIgUABIAAACQAOACAHAGQAHAGAAAJQAAAIgFAHQgFAGgKADQgLADgPAAQgZAAAAgJgAH1A/QgRgLgIgWQgJgWAAgeQAAgaAFgVQAFgUALgNQAKgOAOgHQAOgGASAAQARAAAOAGQAOAHAGAKQAHAKAAAKQAAAFgFAFQgDAFgHAAQgGAAgFgEQgFgEgCgGQgDgIgHgFQgHgFgJAAQgHAAgIAEQgHAEgFAHQgKAPgBAlQAJgLALgGQALgFAOAAQANAAAKAFQALAFAJAJQAIAJAEAMQAFAMAAAMQAAAUgJAPQgJAQgPAJQgQAJgUAAQgXAAgRgMgAINgbQgHAEgFAJQgFAIAAALQAAASAJAMQAKANAPAAQAOAAAIgLQAJgMAAgSQAAgMgEgIQgEgJgHgFQgHgFgJAAQgJAAgIAFgAENBFQgNgFgLgKQgJgLgGgNQgEgOAAgQQAAgRAEgOQAGgOAJgKQAKgKAOgGQAOgFAQAAQARAAAOAFQAOAGAKAKQAKAKAFAOQAFAOAAARQAAAPgFAPQgGAOgJAKQgKAKgOAFQgOAGgRAAQgQAAgOgGgAEYgrQgIAGgFALQgEALAAAPQAAANAEALQAFALAIAGQAIAGALAAQARAAAKgNQALgNgBgVQABgXgLgNQgKgMgRAAQgLAAgIAFgAAIBFQgGgFgGgKQgNAKgNAFQgMAGgQAAQgOAAgLgGQgLgGgGgJQgGgKAAgLQAAgQAKgLQAKgJARgEIARgEIAZgFIAVgGQAAgPgGgGQgFgHgQAAQgPAAgHAEQgHAEgFAHIgIALQgBACgIAAQgGAAgFgEQgEgEAAgGQAAgKAHgJQAHgJAPgGQAOgGAXAAQAYAAANAGQAOAFAGANQAGAMAAAVIAAAVIgBAVQABAKADAMIAEAOQgBAGgFAFQgGAFgGAAQgGAAgFgGgAgeAGIgVAFQgGABgGAFQgFAFgBAIQABAIAGAGQAHAGAKAAQALAAAKgFQAJgFAEgHQAFgJAAgTIAAgFQgIADgQADgAmUBFQgPgHgHgJQgGgJAAgJQgBgHAFgEQAEgEAHAAQAGAAADADQADACADAGQAFAKAJAFQAIAEAOAAQALAAAHgEQAHgGAAgGQAAgKgHgEQgIgFgRgEQgTgFgMgFQgNgEgGgJQgIgIAAgNQAAgLAHgKQAGgKAOgGQAMgGATAAQAPAAALADQALADAIAFQAIAFAEAGQAEAGAAAGQAAAHgEAEQgEAEgJAAQgFAAgEgDIgKgKQgEgGgFgDQgGgDgKAAQgKAAgHAEQgGAEAAAHQAAAGAEADQAFAEAJADIAWAGQASAEALAGQALAFAGAIQAFAIABAKQAAAPgIALQgHALgPAGQgPAGgVAAQgUAAgOgGgApIBHQgNAAgGgGQgGgGAAgNIAAiVQAAgJACgGQADgFAFgDQAGgCAJAAIBrAAQAKAAAEAEQAFAEAAAHQAAAIgFAEQgEAEgKAAIhcAAIAAAxIBVAAQAJAAAEAFQAFAEAAAHQAAAGgFAFQgEAEgJAAIhVAAIAAA4IBfAAQAJAAAGAEQAEAFAAAHQAAAHgEAFQgGAEgJAAg");
	this.shape.setTransform(111.8,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("APnBMQgOgGgLgLQgJgLgFgPQgFgQAAgRQAAgRAFgPQAGgPAJgMQAKgKAOgGQAOgFATAAQAYAAARAKQASAKAJASQAJATAAAXQAAASgFAPQgEAPgLALQgKALgOAGQgOAGgTAAQgSAAgPgGgAP2gzQgIAEgGAHQgGAGgEALQgDAKAAANQAAANADALQAEALAGAHQAGAHAJAEQAIADAJABQAMgBAKgGQAKgGAHgNQAGgNAAgSQAAgQgGgNQgGgNgKgHQgKgGgNAAQgKAAgIAEgAN8BRIgGgFIgGgGIgFgHIg7hbIAABcQAAAIgFAFQgEAFgHAAQgGAAgEgFQgEgFgBgIIAAh5QAAgIADgEQACgFAEgDQAFgDAGAAIAGABIAGAEIAFAGIAFAIIA9BcIAAhdQAAgJAEgFQAEgEAGAAQAHAAAFAEQADAFAAAJIAAB7QAAAUgRABIgIgBgALaBRIgEgFQgDgBgCgGIgDgIIgIgUIhAAAIgHAUQgEAMgEAEQgDAFgHAAQgGAAgFgFQgEgEAAgGIABgHIADgJIAphlIAEgKIAFgLQADgEAEgCQAFgDAHAAQAGAAAFADQAEACADAEIAEAJIAFAMIApBkQAFAMAAAFQAAAFgFAFQgEAFgHAAIgGgBgAKPASIAvAAIgYhBgAHBBNQgEgEAAgHQAAgHAEgFQAFgEAHgBQAGABAGAEQAEAEAAAIQAAAHgEAEQgGAFgGAAQgHAAgFgFgAFDBJQgNgJgHgRQgHgRAAgaQAAgSAFgRQADgQAJgKQAHgLALgFQAMgGAOABQANgBALAGQAKAFAGAIQAFAIAAAIQAAAEgDADQgDAEgFAAQgFAAgEgCQgEgEgCgEQgCgHgGgEQgFgEgHAAQgGAAgGADQgFADgEAGQgIAMgBAdQAHgJAJgEQAIgEALAAQAKgBAJAEQAIAFAHAHQAGAGAEAJQAEAJAAALQgBAPgGANQgHAMgMAHQgNAHgQAAQgSAAgNgJgAFWABQgGADgEAHQgEAHABAJQgBAOAIAKQAIAJALAAQALAAAHgJQAHgIAAgOQAAgLgEgGQgDgIgFgDQgGgDgHAAQgHAAgGADgACzBNQgFgEgEgIQgLAJgJADQgKAFgNAAQgMAAgIgFQgJgEgEgIQgEgHgBgJQABgMAHgJQAIgIANgEIAOgCIATgEIARgFQgBgLgEgFQgEgGgNABQgLgBgFAEQgGADgFAGIgFAIQgCABgGAAQgEABgEgEQgEgCABgFQgBgIAGgHQAFgHAMgFQAMgFARAAQATAAAMAFQALAFAEAJQAEAKAAAPIAAASIAAAQQABAIACAJQADAJAAADQAAAFgFADQgDAEgGAAQgFAAgEgFgACVAcIgRADQgEACgFAEQgFADAAAHQAAAGAGAFQAFAFAIAAQAIgBAIgEQAIgDADgGQAEgHAAgPIAAgFIgTAGgAgjBCQgOgQAAgbQAAgSAGgNQAIgOANgHQANgIARAAQALAAAKAEQAKADAGAFQAHAGADAFQAEAGAAAFQAAAFgEADQgEAEgGAAQgDAAgCgCQgDgBgDgFQgGgHgFgEQgGgEgJAAQgMAAgIAKQgIAJAAARQAAAJACAHQACAHAEAFQADAEAGADQAFADAGgBQAJAAAHgDQAGgFAFgIQACgFADgCQADgEAFAAQAFAAAEAFQADAEABAFQgBAFgDAGQgDAGgHAGQgHAGgKADQgKAEgNAAQgaAAgQgQgAhtBNQgEgFgBgIIAAhTQABgIAEgFQADgFAHAAQAGAAAFAFQAEAFAAAHIAABUQAAAIgEAFQgFAFgGAAQgHAAgDgFgAi5BNQgHgFgDgHQgCgJAAgOIAAg3IgDAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAIAAIACAAIAAgRIABgLQAAgFACgCQABgDAEgDQADgCAEAAQAGABAEAEQADACABAEIABAMIAAAUIALAAQAGAAADADQADADAAAFQAAAFgEADQgFACgJAAIgFAAIAAA1IABAKQAAAFACACQACACAFAAIAGgBIAHgBQAEAAADADQADADAAAEQAAAHgIAEQgIAEgOAAQgOAAgHgFgAkDBNQgEgEgFgIQgKAJgKADQgKAFgMAAQgMAAgJgFQgIgEgEgIQgFgHAAgJQAAgMAHgJQAIgIAOgEIANgCIATgEIARgFQAAgLgEgFQgFgGgMABQgLgBgGAEQgGADgEAGIgGAIQgCABgFAAQgFABgEgEQgDgCAAgFQAAgIAGgHQAFgHALgFQAMgFASAAQATAAALAFQALAFAFAJQAEAKAAAPIAAASIAAAQQAAAIADAJQADAJAAADQgBAFgEADQgEAEgGAAQgEAAgFgFgAkhAcIgRADQgEACgFAEQgEADAAAHQAAAGAFAFQAGAFAIAAQAIgBAHgEQAIgDAEgGQADgHAAgPIAAgFIgTAGgAmWBNQgEgFgBgJIAAgxIgBgOQAAgGgDgEQgEgDgHgBQgHABgFADQgEADgDAGQgEAGAAATIAAAnQAAAJgEAFQgEAFgHAAQgHAAgEgFQgEgFAAgJIAAgvIgBgQQgBgGgDgEQgDgEgIAAQgOAAgFAKQgEAJAAASIAAAoQAAAJgEAFQgEAFgHAAQgHAAgEgFQgEgFAAgJIAAhTQAAgIAEgEQADgEAHgBQAGABAEAEQAEAEAAAGIAAADQAHgIAJgFQAJgFAKAAQAMAAAHAFQAIAFAGAIQAHgIAJgFQAIgFALAAQAMABAIAEQAJAFAEAJQAEAIAAAQIAAA5QAAAJgFAFQgDAFgIAAQgGAAgEgFgAqkBCQgQgQgBgcQAAgNAFgKQAEgLAHgJQAHgHALgEQALgFANAAQARAAANAHQAMAIAGALQAGALAAAMQAAALgGADQgGADgMABIg6AAQABAKAEAHQADAIAHADQAGAEAJAAIAJgBQAFgBAEgDIAHgGIAJgIQACgCAEAAQAFABACACQADACAAAFQAAAEgDAFQgDAFgGAFQgHAFgJADQgJAEgMAAQgdAAgPgQgAqOgIQgHAHgCANIA2AAQgCgNgGgIQgIgIgLABQgLAAgHAIgAr2BNQgIgFgCgHQgCgJAAgOIAAg3IgEAAQgGAAgEgDQgDgDAAgEQAAgFADgDQAEgDAHAAIADAAIAAgRIABgLQAAgFACgCQABgDADgDQAEgCADAAQAGABAEAEQADACACAEIABAMIAAAUIAKAAQAHAAACADQAEADAAAFQAAAFgFADQgEACgJAAIgFAAIAAA1IAAAKQAAAFACACQACACAFAAIAHgBIAHgBQADAAADADQADADAAAEQAAAHgHAEQgIAEgPAAQgOAAgGgFgAtABNQgFgEgEgIQgLAJgKADQgJAFgNAAQgMAAgIgFQgJgEgEgIQgFgHABgJQgBgMAIgJQAIgIANgEIANgCIAUgEIARgFQAAgLgFgFQgEgGgNABQgLgBgGAEQgFADgFAGIgFAIQgCABgFAAQgFABgEgEQgEgCAAgFQABgIAFgHQAGgHALgFQAMgFARAAQAUAAAKAFQALAFAFAJQAFAKAAAPIAAASIAAAQQAAAIACAJQADAJAAADQAAAFgEADQgFAEgFAAQgFAAgEgFgAteAcIgRADQgEACgFAEQgEADAAAHQAAAGAFAFQAFAFAIAAQAJgBAHgEQAIgDADgGQAEgHAAgPIAAgFIgTAGgAvWBNQgDgFAAgIIAAhsIgaBkIgEANQgBAFgEAEQgFAEgIAAQgFAAgEgDQgDgCgCgEQgDgDgBgFIgDgJIgZhkIAABsQAAAIgEAFQgEAFgGAAQgHAAgEgFQgEgEAAgJIAAh8QAAgKAFgEQAFgDAJAAIAKAAQAJgBAFACQADACACAEIAFANIAWBWIAYhWIAEgNQACgEAEgCQAEgCAJABIAKAAQAJAAAFADQAGAEAAAKIAAB8QAAAIgFAFQgEAFgGAAQgHAAgEgFgAIIgRQgKgKAAgQQgBgMAFgHQAEgJAKgFQAIgEAMAAQALAAAJAEQAJAFAFAJQAFAHgBAMQABAKgFAJQgEAIgKAEQgIAFgMAAQgSAAgKgKgAIYg7QgFAGAAAKQAAAJAFAFQAEAGAIAAQAIAAAEgGQAFgFAAgJQAAgKgFgGQgEgGgIAAQgIAAgEAGgAk4gzIADgHIAFgJQAEgHADgDQAEgBAFAAIAPAAQAGgBgBACIgFAHIgNALIgIAIQgGACgHAAQgFABAAgDgAhtg2QgFgDAAgIQAAgGAFgEQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgDAEgHAAQgFAAgFgEg");
	this.shape_1.setTransform(775.5,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// painel branco e preto
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313131").s().p("EhEvAC+IAAl7MCJfAAAIAAF7g");
	this.shape_2.setTransform(460,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhEvAoiMAAAhRDMCJfAAAMAAABRDg");
	this.shape_3.setTransform(460,297.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// fundo
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#41B9F0").s().p("EhH3AwDMAAAhgFMCPvAAAMAAABgFg");
	this.shape_4.setTransform(460,307.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Alayoufundo, new cjs.Rectangle(0,0,920,615), null);


(lib.iniciarBut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ah5CkQgygwgEhGIA3AAQAEAwAjAfQAhAgAwAAQAxAAAlgiQAjglAAgxQgBgugggjQghgjgtgDIgCAAIACBcIiMhuICJhwIABBKIACAAQBFAEAxAyQAwAzAABGQAABIg0A0Qg0A0hIAAQhFAAg0gxg");
	this.shape.setTransform(0,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjEFeQiZAAAAiYIAAmKQAAiZCZAAIGKAAQCYAAAACZIAAGKQAACYiYAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("AjEFeQiZAAAAiYIAAmKQAAiZCZAAIGKAAQCYAAAACZIAAGKQAACYiYAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.startBut2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhfCYQgNgBgGgKQgIgIAAgLIAAj0QAAgJAIgJQAGgJANgCQALAAAIAFIC6B+QAJADACAKQAEAJgEAJQgCAKgJAFIi6B6QgHAEgJAAIgDAAg");
	this.shape.setTransform(4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAAFeQiPAAhohmIAAgBQhmhnAAiQQAAiQBmhmQBnhnCQAAQBhAABOAuIAAAAQAnAWAhAjIABAAQBmBmAACQQAACRhmBnQgjAhgmAXQhNAuhgAAIgCAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("AAAFeQiPAAhohmIAAgBQhmhnAAiQQAAiQBmhmQBnhnCQAAQBhAABOAuIAAAAQAnAWAhAjIABAAQBmBmAACQQAACRhmBnQgjAhgmAXQhNAuhgAAIgCAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AAAI7QjrAAioimIAAgBQiniogBjsQABjsCninQCnioDsAAQCeAAB/BLIABABQA+AkA3A4IABAAQCnCoAADrQAADtinCoQg4A2g/AmQh9BLicAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.talvez3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBAIAAgdIAcAAIAAAdgAgNAVIAAgFIAAgFQAAgJADgGIAAAAQAEgGAIgHIAAgBIAJgIQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgEgDgCQgDgDgGAAQgEAAgEADQgEADgBAHIgBAFIgbgEIAAgFQABgOALgJQAMgKAQAAQATAAALAKQALAKAAANQAAAIgEAHQgEAGgMAKIgHAGIAAAJIAAAFg");
	this.shape.setTransform(0,0,1,1,0,0,0,0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5A46C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.talvez2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBAIAAgdIAcAAIAAAdgAgNAVIAAgFIAAgFQAAgJADgGIAAAAQAEgGAIgHIAAgBIAJgIQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgEgDgCQgDgDgGAAQgEAAgEADQgEADgBAHIgBAFIgbgEIAAgFQABgOALgJQAMgKAQAAQATAAALAKQALAKAAANQAAAIgEAHQgEAGgMAKIgHAGIAAAJIAAAFg");
	this.shape.setTransform(0,0,1,1,0,0,0,0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBDC1").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.errado2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAVIgjAkIgVgVIAkgkIgjgiIAVgWIAiAkIAjgkIAVAWIgjAiIAkAkIgVAVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3513C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.certo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3AOIARgYIAcATIApg7IAZARIg7BUg");
	this.shape.setTransform(0.3,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCC828").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.Pontuacao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		///*var aqui=this;
		//function setPercentagem (k){
		//	texto.htmlText = "Pontuação: "+k+"%"
		//	aqui.gotoAndStop(k);
		//}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(101));

	// Layer 3
	this.texto = new cjs.Text("Pontuação", "30px 'VAG Round'", "#313131");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 35;
	this.texto.lineWidth = 546;
	this.texto.parent = this;
	this.texto.setTransform(0,-88);

	this.timeline.addTween(cjs.Tween.get(this.texto).wait(101));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#313131").ss(1,1,1).p("AfOm3IBzFHIFcAJIkUDSIBjFNIkejFIkfDFIBklNIkUjSIFbgJgAPlm3IBzFHIFcAJIkUDSIBjFNIkejFIkeDFIBilNIkTjSIFbgJgABzhwIFbAJIkTDSIBjFNIkejFIkeDFIBjlNIkTjSIFbgJIBzlHgAvom3IB0FHIFbAJIkUDSIBjFNIkejFIkeDFIBjlNIkUjSIFbgJgA9ZhwIFbAJIkUDSIBjFNIkejFIkeDFIBjlNIkUjSIFbgJIB0lHg");
	this.shape.setTransform(0.1,52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(101));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_39 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_40 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_41 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_42 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_43 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_44 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_45 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_46 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_47 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_48 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_51 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_52 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_53 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_55 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_56 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_57 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_58 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_60 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_61 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_63 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_64 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_66 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_67 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_68 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_69 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_70 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_71 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_72 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_75 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_76 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_77 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_78 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_79 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_80 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_81 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_82 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_83 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_84 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_85 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_86 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_87 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_88 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_89 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_90 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_91 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_92 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_93 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_94 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_95 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_96 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_97 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_98 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");
	var mask_graphics_99 = new cjs.Graphics().p("Eg14AKyIAA1jMBrxAAAIAAVjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-594.4,y:45.7}).wait(1).to({graphics:mask_graphics_1,x:-589.4,y:45.8}).wait(1).to({graphics:mask_graphics_2,x:-584.4,y:45.9}).wait(1).to({graphics:mask_graphics_3,x:-579.4,y:46}).wait(1).to({graphics:mask_graphics_4,x:-574.4,y:46}).wait(1).to({graphics:mask_graphics_5,x:-569.4,y:46.1}).wait(1).to({graphics:mask_graphics_6,x:-564.4,y:46.2}).wait(1).to({graphics:mask_graphics_7,x:-559.4,y:46.3}).wait(1).to({graphics:mask_graphics_8,x:-554.4,y:46.3}).wait(1).to({graphics:mask_graphics_9,x:-549.4,y:46.4}).wait(1).to({graphics:mask_graphics_10,x:-544.3,y:46.5}).wait(1).to({graphics:mask_graphics_11,x:-539.3,y:46.6}).wait(1).to({graphics:mask_graphics_12,x:-534.3,y:46.6}).wait(1).to({graphics:mask_graphics_13,x:-529.3,y:46.7}).wait(1).to({graphics:mask_graphics_14,x:-524.3,y:46.8}).wait(1).to({graphics:mask_graphics_15,x:-519.3,y:46.9}).wait(1).to({graphics:mask_graphics_16,x:-514.3,y:46.9}).wait(1).to({graphics:mask_graphics_17,x:-509.3,y:47}).wait(1).to({graphics:mask_graphics_18,x:-504.3,y:47.1}).wait(1).to({graphics:mask_graphics_19,x:-499.3,y:47.2}).wait(1).to({graphics:mask_graphics_20,x:-494.3,y:47.2}).wait(1).to({graphics:mask_graphics_21,x:-489.3,y:47.3}).wait(1).to({graphics:mask_graphics_22,x:-484.2,y:47.4}).wait(1).to({graphics:mask_graphics_23,x:-479.2,y:47.5}).wait(1).to({graphics:mask_graphics_24,x:-474.2,y:47.5}).wait(1).to({graphics:mask_graphics_25,x:-469.2,y:47.6}).wait(1).to({graphics:mask_graphics_26,x:-464.2,y:47.7}).wait(1).to({graphics:mask_graphics_27,x:-459.2,y:47.8}).wait(1).to({graphics:mask_graphics_28,x:-454.2,y:47.8}).wait(1).to({graphics:mask_graphics_29,x:-449.2,y:47.9}).wait(1).to({graphics:mask_graphics_30,x:-444.2,y:48}).wait(1).to({graphics:mask_graphics_31,x:-439.2,y:48.1}).wait(1).to({graphics:mask_graphics_32,x:-434.2,y:48.1}).wait(1).to({graphics:mask_graphics_33,x:-429.2,y:48.2}).wait(1).to({graphics:mask_graphics_34,x:-424.2,y:48.3}).wait(1).to({graphics:mask_graphics_35,x:-419.1,y:48.4}).wait(1).to({graphics:mask_graphics_36,x:-414.1,y:48.4}).wait(1).to({graphics:mask_graphics_37,x:-409.1,y:48.5}).wait(1).to({graphics:mask_graphics_38,x:-404.1,y:48.6}).wait(1).to({graphics:mask_graphics_39,x:-399.1,y:48.7}).wait(1).to({graphics:mask_graphics_40,x:-394.1,y:48.7}).wait(1).to({graphics:mask_graphics_41,x:-389.1,y:48.8}).wait(1).to({graphics:mask_graphics_42,x:-384.1,y:48.9}).wait(1).to({graphics:mask_graphics_43,x:-379.1,y:49}).wait(1).to({graphics:mask_graphics_44,x:-374.1,y:49}).wait(1).to({graphics:mask_graphics_45,x:-369.1,y:49.1}).wait(1).to({graphics:mask_graphics_46,x:-364.1,y:49.2}).wait(1).to({graphics:mask_graphics_47,x:-359,y:49.3}).wait(1).to({graphics:mask_graphics_48,x:-354,y:49.3}).wait(1).to({graphics:mask_graphics_49,x:-349,y:49.4}).wait(1).to({graphics:mask_graphics_50,x:-344,y:49.5}).wait(1).to({graphics:mask_graphics_51,x:-339,y:49.6}).wait(1).to({graphics:mask_graphics_52,x:-334,y:49.6}).wait(1).to({graphics:mask_graphics_53,x:-329,y:49.7}).wait(1).to({graphics:mask_graphics_54,x:-324,y:49.8}).wait(1).to({graphics:mask_graphics_55,x:-319,y:49.9}).wait(1).to({graphics:mask_graphics_56,x:-314,y:49.9}).wait(1).to({graphics:mask_graphics_57,x:-309,y:50}).wait(1).to({graphics:mask_graphics_58,x:-304,y:50.1}).wait(1).to({graphics:mask_graphics_59,x:-298.9,y:50.2}).wait(1).to({graphics:mask_graphics_60,x:-293.9,y:50.2}).wait(1).to({graphics:mask_graphics_61,x:-288.9,y:50.3}).wait(1).to({graphics:mask_graphics_62,x:-283.9,y:50.4}).wait(1).to({graphics:mask_graphics_63,x:-278.9,y:50.5}).wait(1).to({graphics:mask_graphics_64,x:-273.9,y:50.5}).wait(1).to({graphics:mask_graphics_65,x:-268.9,y:50.6}).wait(1).to({graphics:mask_graphics_66,x:-263.9,y:50.7}).wait(1).to({graphics:mask_graphics_67,x:-258.9,y:50.8}).wait(1).to({graphics:mask_graphics_68,x:-253.9,y:50.8}).wait(1).to({graphics:mask_graphics_69,x:-248.9,y:50.9}).wait(1).to({graphics:mask_graphics_70,x:-243.9,y:51}).wait(1).to({graphics:mask_graphics_71,x:-238.8,y:51.1}).wait(1).to({graphics:mask_graphics_72,x:-233.8,y:51.1}).wait(1).to({graphics:mask_graphics_73,x:-228.8,y:51.2}).wait(1).to({graphics:mask_graphics_74,x:-223.8,y:51.3}).wait(1).to({graphics:mask_graphics_75,x:-218.8,y:51.4}).wait(1).to({graphics:mask_graphics_76,x:-213.8,y:51.4}).wait(1).to({graphics:mask_graphics_77,x:-208.8,y:51.5}).wait(1).to({graphics:mask_graphics_78,x:-203.8,y:51.6}).wait(1).to({graphics:mask_graphics_79,x:-198.8,y:51.7}).wait(1).to({graphics:mask_graphics_80,x:-193.8,y:51.7}).wait(1).to({graphics:mask_graphics_81,x:-188.8,y:51.8}).wait(1).to({graphics:mask_graphics_82,x:-183.8,y:51.9}).wait(1).to({graphics:mask_graphics_83,x:-178.8,y:52}).wait(1).to({graphics:mask_graphics_84,x:-173.7,y:52}).wait(1).to({graphics:mask_graphics_85,x:-168.7,y:52.1}).wait(1).to({graphics:mask_graphics_86,x:-163.7,y:52.2}).wait(1).to({graphics:mask_graphics_87,x:-158.7,y:52.3}).wait(1).to({graphics:mask_graphics_88,x:-153.7,y:52.3}).wait(1).to({graphics:mask_graphics_89,x:-148.7,y:52.4}).wait(1).to({graphics:mask_graphics_90,x:-143.7,y:52.5}).wait(1).to({graphics:mask_graphics_91,x:-138.7,y:52.6}).wait(1).to({graphics:mask_graphics_92,x:-133.7,y:52.6}).wait(1).to({graphics:mask_graphics_93,x:-128.7,y:52.7}).wait(1).to({graphics:mask_graphics_94,x:-123.7,y:52.8}).wait(1).to({graphics:mask_graphics_95,x:-118.7,y:52.9}).wait(1).to({graphics:mask_graphics_96,x:-113.6,y:52.9}).wait(1).to({graphics:mask_graphics_97,x:-108.6,y:53}).wait(1).to({graphics:mask_graphics_98,x:-103.6,y:53.1}).wait(1).to({graphics:mask_graphics_99,x:-98.6,y:53.2}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AfODzIkeDFIBjlNIkUjSIFbgJIB0lHIBzFHIFbAJIkTDSIBjFNgAPlDzIkeDFIBjlNIkUjSIFbgJIB0lHIBzFHIFcAJIkUDSIBjFNgAAADzIkdDFIBjlNIkUjSIFbgJIBzlHIBzFHIFbAJIkTDSIBjFNgAvoDzIkeDFIBjlNIkUjSIFcgJIBzlHIB0FHIFbAJIkUDSIBjFNgA/MDzIkfDFIBjlNIkUjSIFcgJIB0lHIBzFHIFbAJIkUDSIBjFNg");
	this.shape_1.setTransform(0.1,52);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(101));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgqqAUeQguAAAAguMAAAgnfQAAguAuAAMBVUAAAQAvAAgBAuMAAAAnfQABAugvAAg");
	this.shape_2.setTransform(0.3,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#41B9F0").s().p("EgqqAV6QiKAAAAiKMAAAgnfQAAiKCKAAMBVUAAAQCLAAAACKMAAAAnfQAACKiLAAgEgrYgTvMAAAAnfQAAAuAuAAMBVUAAAQAvAAgBguMAAAgnfQABgugvAAMhVUAAAQguAAAAAug");
	this.shape_3.setTransform(0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.6,-140.5,573.8,280.5);


(lib.errado3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAVIgjAkIgVgVIAkgkIgjgiIAVgWIAiAkIAjgkIAVAWIgjAiIAkAkIgVAVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3513C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.certo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3AOIARgYIAcATIApg7IAZARIg7BUg");
	this.shape.setTransform(0.3,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCC828").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.Cortina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhEqAoeMAAAhQ7MCJVAAAMAAABQ7g");
	this.shape.setTransform(439.5,259);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cortina, new cjs.Rectangle(0,0,879,518), null);


(lib.BotaoSimples = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ai1FCQiMAAAAiMIAAlrQAAiMCMAAIFrAAQCMAAAACMIAAFrQAACMiMAAg");
	this.shape.setTransform(0,0,1.087,1.087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.okBut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313131").s().p("AjZA1IBDheIBtBNICkjqIBfBCIjnFLg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ai1FCQiMAAAAiMIAAlrQAAiMCMAAIFrAAQCMAAAACMIAAFrQAACMiMAAg");
	this.shape_1.setTransform(0,0,1.087,1.087);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("AjEFeQiZAAAAiYIAAmKQAAiZCZAAIGKAAQCYAAAACZIAAGKQAACYiYAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AkaH0QjZAAAAjZIAAo1QAAjZDZAAII1AAQDZAAAADZIAAI1QAADZjZAAg");
	this.shape_3.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.nextBut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313131").s().p("AALClQgEgBgEgGQgDgGAAgHIAAhfIjHAAIAAhjIDHAAIAAhfQAAgHADgGQAEgGAEgBQAFgBAFAEICsCRQAFAEABAHQACAFgCAHQgBAHgFAEIisCRQgEACgEAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ai1FCQiMAAAAiMIAAlrQAAiMCMAAIFrAAQCMAAAACMIAAFrQAACMiMAAg");
	this.shape_1.setTransform(0,0,1.087,1.087);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("AjEFeQiZAAAAiYIAAmKQAAiZCZAAIGKAAQCYAAAACZIAAGKQAACYiYAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AkaH0QjZAAAAjZIAAo1QAAjZDZAAII1AAQDZAAAADZIAAI1QAADZjZAAg");
	this.shape_3.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.BotaoSimples_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313131").s().p("AgKDRQgEAAgDgDQgCgDAAgEIAAiVIi+AAIAAhjIC+AAIAAiVQAAgEACgDQADgDAEAAQAFAAADACIDRDIIACAFQABABgBADIgCAFIjRDGQgDADgEAAIgBAAg");
	this.shape.setTransform(0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ai1FCQiMAAAAiMIAAlrQAAiMCMAAIFrAAQCMAAAACMIAAFrQAACMiMAAg");
	this.shape_1.setTransform(0,0,1.087,1.087);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("AjEFeQiZAAAAiYIAAmKQAAiZCZAAIGKAAQCYAAAACZIAAGKQAACYiYAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.motor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#313131").ss(2,1,1).p("AytAxIGQH1IL2ABIAnAAIApAAIL1gBIGQn1IAApXIzNAAIyOAAg");
	this.shape.setTransform(211.6,-17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE1C4").s().p("AAAInIgoAAIr1gBImQn1IAApXISOAAITNAAIAAJXImQH1Ir2ABg");
	this.shape_1.setTransform(211.6,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fundo
	this.instance = new lib.imagemmotor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.motor, new cjs.Rectangle(0,-73,457,377.1), null);


(lib.expressaonumerica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{sit1:1,sit2:3,sit3:5,sit4:7,sit5:9,sit6:11,sit7:15,sit8:19,sit9:21,sit10:23,sit11:25,sit12:27,sit13:29,sit14:31,sit15:33,sit16:39,sit17:41,sit18:43,sit19:45,sit20:54,sit21:56,sit22:58,sit23:60});

	// timeline functions:
	this.frame_0 = function() {
		//import flash.display.MovieClip;
		//
		this.stop();
		this.aqui = this;
		this.raiz = this.parent;
		this.resultado;
		//
		this.tSizes = [40, 35, 30];
		this.yys = [-27, -35, -45];
		//
		this.contador;
		var i;
		var a, b, c, d, e, f;
		//
		this.lista = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20];
		this.lista2;
		this.opcoes = [];
		//
		this.novo = function (k) {
			this.gotoAndPlay("sit" + k);
		}
		this.getDivisores = function (k) {
			var res = [];
			for (var i = 2; i < k; i++) {
				if (k % i == 0) {
					res.push(i);
				}
			}
			return res;
		}
		//
		this.novaOpcao = function (base, exp) {
			var flag = false;
			var bb, ee;
			for (var i = 0; i < this.contador; i++) {
				bb = this.opcoes[i].potencia[0];
				ee = this.opcoes[i].potencia[1];
				if (Math.pow(base, exp) == Math.pow(bb, ee)) {
					flag = true;
					break;
				}
			}
			if (!flag) {
				this.opcoes[this.contador].setPot(base, exp);
				if (this.contador == 0) {
					this.raiz.kCerto = this.opcoes[this.contador].k;
				}
				this.contador++;
			}
		}
		//
		this.novaOpcaoAleatoria = function () {
			var newB = 1 + this.raiz.sorteiaK(9);
			var newE = 1 + this.raiz.sorteiaK(9);
			this.novaOpcao(newB, newE);
		}
		this.arruma = function (objs) {
			//alert(objs[0].text);
			var totalW = 0;
			var n = objs.length;
			var d = 2;
			for (var i = 0; i < n; i++) {
				objs[i].textAlign = "center";
				totalW = totalW + objs[i].getBounds().width;
			}
			totalW = totalW + (n - 1) * d;
			var x0 = Math.round(-totalW+objs[0].getBounds().width)*0.5;
			objs[0].x = x0;
			for (i = 1; i < n; i++) {
				objs[i].x = objs[i - 1].x + 0.5*(objs[i - 1].getBounds().width+objs[i].getBounds().width) + d;
			}
		}
	}
	this.frame_2 = function() {
		// multiplicação de potências com a mesma base
		this.stop();
		//
		this.removeAllChildren();
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var op = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e2.y = this.yys[1];
		this.addChild(b1);
		this.addChild(op);
		this.addChild(b2);
		this.addChild(e1);
		this.addChild(e2);
		//
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(9);
		b1.text = String(a);
		b2.text = String(a);
		//
		b = 1 + this.raiz.sorteiaK(9);
		e1.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(9);
		e2.text = String(c);
		//
		op.text = "x";
		//
		this.resultado = new Array(2);
		this.resultado[0] = a;
		this.resultado[1] = b + c;
		//
		this.raiz.baralhaArray(this.opcoes);
		
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b * c);
		this.novaOpcao(a * a, b * c);
		this.novaOpcao(a * a, b + c);
		
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1, e1, op, b2, e2]);
	}
	this.frame_4 = function() {
		// multiplicação de potências com o mesmo expoente
		this.stop();
		//
		this.removeAllChildren();
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var op = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e2.y = this.yys[1];
		this.addChild(b1);
		this.addChild(op);
		this.addChild(b2);
		this.addChild(e1);
		this.addChild(e2);
		//
		var a, b, c, d, e, f;
		a = 1 + this.raiz.sorteiaK(9);
		b1.text = String(a);
		b = 1+this.raiz.sorteiaK(9);
		b2.text = String(b);
		//
		c = 1+this.raiz.sorteiaK(9);
		e1.text=String(c);
		e2.text = String(c);
		//
		op.text = "x";
		//
		this.resultado = new Array();
		this.resultado[0]=a*b;
		this.resultado[1]=c;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador=0;
		this.novaOpcao(this.resultado[0],this.resultado[1]);
		this.novaOpcao(a+b,c);
		this.novaOpcao(a+b,c+c);
		this.novaOpcao(a*b,c+c);
		//
		while(this.contador<this.opcoes.length){
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1,e1,op,b2,e2]);
	}
	this.frame_6 = function() {
		// divisao de potências com a mesma base
		this.stop();
		//
		this.removeAllChildren();
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var op = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e2.y = this.yys[1];
		this.addChild(b1);
		this.addChild(op);
		this.addChild(b2);
		this.addChild(e1);
		this.addChild(e2);
		//
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(9);
		b1.text = String(a);
		b2.text = String(a);
		//
		b = 4 + this.raiz.sorteiaK(6);
		e1.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(b - 2);
		e2.text = String(c);
		//
		op.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = a;
		this.resultado[1] = b - c;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b + c);
		this.novaOpcao(b - c, a);
		this.novaOpcao(b + c, a);
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1, e1, op, b2, e2]);
	}
	this.frame_8 = function() {
		// divisao de potências com o mesmo expoente
		this.stop();
		//
		this.removeAllChildren();
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var op = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e2.y = this.yys[1];
		this.addChild(b1);
		this.addChild(op);
		this.addChild(b2);
		this.addChild(e1);
		this.addChild(e2);
		//
		var a, b, c, d, e, f;
		//
		a = this.lista.length;
		b = this.raiz.sorteiaK(a);
		c = this.lista[b];
		b1.text = String(c);
		this.lista2 = this.getDivisores(c);
		d = this.lista2[this.raiz.sorteiaK(this.lista2.length)];
		b2.text = String(d);
		//
		e = 1 + this.raiz.sorteiaK(9);
		e1.text = String(e);
		e2.text = String(e);
		//
		op.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = Math.floor(c / d);
		this.resultado[1] = e;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a - b, c);
		this.novaOpcao(Math.round(c / d), 2 * c);
		this.novaOpcao(a - b, 2 * c);
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1, e1, op, b2, e2]);
	}
	this.frame_10 = function() {
		// potência de potência
		this.stop();
		//
		this.removeAllChildren();
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var p1 = new createjs.Text("( ", this.tSizes[0] + "px VAG Round", "#313131");
		p1.y = this.yys[0]-3;
		var p2 = new createjs.Text(")", this.tSizes[0] + "px VAG Round", "#313131");
		p2.y = this.yys[0]-3;
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		this.addChild(b1);
		this.addChild(p1);
		this.addChild(p2);
		this.addChild(e1);
		this.addChild(e2);
		//
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(9);
		b1.text = String(a);
		b = 1 + this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2 + this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		this.resultado = new Array();
		this.resultado[0] = a;
		this.resultado[1] = b * c;
		//
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b + c);
		this.novaOpcao(a, 1 + this.raiz.sorteiaK(2 * b * c - 1));
		this.novaOpcao(a, Math.pow(b, c));
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([p1, b1, e1, p2, e2]);
	}
	this.frame_12 = function() {
		// potência como expoente
		this.stop();
		this.removeAllChildren();
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		this.addChild(b1);
		this.addChild(e1);
		this.addChild(e2);
		//
		a = 1 + this.raiz.sorteiaK(9);
		b1.text = String(a);
		b = 1 + this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2 + this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		this.resultado = new Array();
		this.resultado[0] = a;
		this.resultado[1] = Math.pow(b, c);
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b + c);
		this.novaOpcao(a, 1 + this.raiz.sorteiaK(2 * b * c - 1));
		this.novaOpcao(a, b * c);
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1, e1, e2]);
	}
	this.frame_16 = function() {
		this.removeAllChildren();
		this.b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		this.b1.y = this.yys[0];
		this.b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		this.b2.y = this.yys[0];
		this.b3 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		this.b3.y = this.yys[0];
		this.op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		this.op1.y = this.yys[0];
		this.op2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		this.op2.y = this.yys[0];
		this.e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		this.e1.y = this.yys[1];
		this.e2 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		this.e2.y = this.yys[1];
		this.e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		this.e3.y = this.yys[1];
		this.addChild(this.b1);
		this.addChild(this.b2);
		this.addChild(this.b3);
		this.addChild(this.op1);
		this.addChild(this.op2);
		this.addChild(this.e1);
		this.addChild(this.e2);
		this.addChild(this.e3);
		//
		a = 8;
		b = 23;
		this.gotoAndPlay("sit" + String(a + this.raiz.sorteiaK(b - a + 1)));
		//this.gotoAndPlay("sit23");
	}
	this.frame_20 = function() {
		// a^b x a^c : a^d
		this.stop();
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(9);
		this.b1.text = String(a);
		this.b2.text = String(a);
		this.b3.text = String(a);
		//
		b = 1 + this.raiz.sorteiaK(9);
		this.e1.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(9);
		this.e2.text = String(c);
		//
		d = 1 + this.raiz.sorteiaK(b + c - 2);
		this.e3.text = String(d);
		//
		this.op1.text = "x";
		this.op2.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = a;
		this.resultado[1] = b + c - d;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b + c + d);
		this.novaOpcao(2 * a, b + c - d);
		this.novaOpcao(a, b * c - d);
		//;
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1, this.e1, this.op1, this.b2, this.e2, this.op2, this.b3, this.e3]);
	}
	this.frame_22 = function() {
		// a^b x a^c : d^(b+c)
		this.stop();
		var a, b, c, d, e, f;
		//;
		a = this.lista[this.raiz.sorteiaK(this.lista.length)];
		this.b1.text = String(a);
		this.b2.text = String(a);
		//
		b = 1 + this.raiz.sorteiaK(9);
		this.e1.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(9);
		this.e2.text = String(c);
		//
		this.lista2 = this.getDivisores(a);
		d = this.lista2[this.raiz.sorteiaK(this.lista2.length)];
		this.b3.text = String(d);
		//
		this.e3.text = String(b + c);
		//
		this.op1.text = "x";
		this.op2.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = Math.floor(a / d);
		this.resultado[1] = b + c;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a - d, b + c);
		this.novaOpcao(a, b * c);
		this.novaOpcao(this.resultado[0], b * c);
		//;
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1, this.e1, this.op1, this.b2, this.e2, this.op2, this.b3, this.e3]);
	}
	this.frame_24 = function() {
		// a^c x b^c : (axb)^d
		this.stop();
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(9);
		this.b1.text = String(a);
		//
		b = 1 + this.raiz.sorteiaK(9);
		this.b2.text = String(b);
		//
		c = 4 + this.raiz.sorteiaK(6);
		this.e1.text = String(c);
		this.e2.text = String(c);
		//
		this.b3.text = String(a * b);
		//
		d = 1 + this.raiz.sorteiaK(c - 1);
		this.e3.text = String(d);
		//
		this.op1.text = "x";
		this.op2.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = a * b;
		this.resultado[1] = c - d;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a * b, c + d);
		this.novaOpcao(a + b, c);
		this.novaOpcao(a + b, d);
		//;
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1, this.e1, this.op1, this.b2, this.e2, this.op2, this.b3, this.e3]);
	}
	this.frame_26 = function() {
		// a^c x b^c : d^c
		this.stop();
		var a, b, c, d, e, f;
		//;
		a = 2 + this.raiz.sorteiaK(6);
		this.b1.text = String(a);
		//
		b = 1 + this.raiz.sorteiaK(6);
		this.b2.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(9);
		this.e1.text = String(c);
		this.e2.text = String(c);
		this.e3.text = String(c);
		
		//
		this.lista2 = this.getDivisores(a * b);
		d = this.lista2[this.raiz.sorteiaK(this.lista2.length)];
		this.b3.text = String(d);
		//
		this.op1.text = "x";
		this.op2.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = Math.floor(a * b / d);
		this.resultado[1] = c;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a + b - d, c);
		this.novaOpcao(a * b - d, c);
		this.novaOpcao(this.resultado[0], 2 + this.raiz.sorteiaK(2 * c - 2));
		//;
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1, this.e1, this.op1, this.b2, this.e2, this.op2, this.b3, this.e3]);
	}
	this.frame_28 = function() {
		// a^b : a^c x a^d
		this.stop();
		var a, b, c, d, e, f;
		//;
		a = 1 + this.raiz.sorteiaK(9);
		this.b1.text = String(a);
		this.b2.text = String(a);
		this.b3.text = String(a);
		//
		b = 5 + this.raiz.sorteiaK(9);
		this.e1.text = String(b);
		//
		c = 1+this.raiz.sorteiaK(b-1);
		this.e2.text = String(c);
		//
		d = 1+this.raiz.sorteiaK(9);
		this.e3.text = String(d);
		//
		this.op1.text = ":";
		this.op2.text = "x";
		//
		this.resultado = new Array();
		this.resultado[0] = a;
		this.resultado[1] = b - c + d;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0],this.resultado[1]);
		this.novaOpcao(a,b+c+d);
		this.novaOpcao(a,(b-c)*d);
		this.novaOpcao(2*a,b-c);
		//;
		while (this.contador<this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1,this.e1,this.op1,this.b2,this.e2,this.op2,this.b3,this.e3]);
	}
	this.frame_30 = function() {
		// a^b : a^c x d^(b-c)
		this.stop();
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(9);
		this.b1.text = String(a);
		this.b2.text = String(a);
		//
		b = 5 + this.raiz.sorteiaK(9);
		this.e1.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(b - 1);
		this.e2.text = String(c);
		//
		d = 1 + this.raiz.sorteiaK(9);
		this.b3.text = String(d);
		//
		this.e3.text = String(b - c);
		//
		this.op1.text = ":";
		this.op2.text = "x";
		//
		this.resultado = new Array();
		this.resultado[0] = a * d;
		this.resultado[1] = b - c;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b + c);
		this.novaOpcao(a + d, b - c);
		this.novaOpcao(1 + this.raiz.sorteiaK(2 * a * d - 1), 1 + this.raiz.sorteiaK(2 * (b - c) - 1));
		//;
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1, this.e1, this.op1, this.b2, this.e2, this.op2, this.b3, this.e3]);
	}
	this.frame_32 = function() {
		// a^c : b^c x (a/b)^d
		this.stop();
		var a, b, c, d, e, f;
		//;
		a = this.lista[this.raiz.sorteiaK(this.lista.length)];
		this.b1.text = String(a);
		//
		var lista2 = this.getDivisores(a);
		b = lista2[this.raiz.sorteiaK(lista2.length)];
		this.b2.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(9);
		this.e1.text = String(c);
		this.e2.text = String(c);
		//
		this.b3.text = String(Math.floor(a / b));
		//
		d = 1 + this.raiz.sorteiaK(9);
		this.e3.text = String(d);
		//
		this.op1.text = ":";
		this.op2.text = "x";
		//
		this.resultado = new Array();
		this.resultado[0] = Math.floor(a / b);
		this.resultado[1] = c + d;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(this.resultado[0], c * d);
		this.novaOpcao(a - b, c + d);
		this.novaOpcao(a - b, 1 + this.raiz.sorteiaK(2 * this.resultado[1] - 1));
		//;
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1, this.e1, this.op1, this.b2, this.e2, this.op2, this.b3, this.e3]);
	}
	this.frame_34 = function() {
		// a^c : b^c x d^c
		this.stop();
		var a, b, c, d, e, f;
		//;
		a = this.lista[this.raiz.sorteiaK(this.lista.length)];
		this.b1.text = String(a);
		//
		var lista2 = this.getDivisores(a);
		b = lista2[this.raiz.sorteiaK(lista2.length)];
		this.b2.text = String(b);
		//
		c = 1 + this.raiz.sorteiaK(9);
		this.e1.text = String(c);
		this.e2.text = String(c);
		this.e3.text = String(c);
		//
		d = 1 + this.raiz.sorteiaK(9);
		this.b3.text = String(d);
		//
		this.op1.text = ":";
		this.op2.text = "x";
		//
		this.resultado = new Array();
		this.resultado[0] = Math.floor(a / b) * d;
		this.resultado[1] = c;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(this.resultado[0], 1 + this.raiz.sorteiaK(2 * this.resultado[1] - 1));
		this.novaOpcao(a - b + d, this.resultado[1]);
		this.novaOpcao(a - b + d, 1 + this.raiz.sorteiaK(2 * this.resultado[1] - 1));
		//;
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([this.b1, this.e1, this.op1, this.b2, this.e2, this.op2, this.b3, this.e3]);
	}
	this.frame_40 = function() {
		// (a^b)^c x a^d
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var p1 = new createjs.Text("( ", this.tSizes[0] + "px VAG Round", "#313131");
		p1.y = this.yys[0];
		var p2 = new createjs.Text(")", this.tSizes[0] + "px VAG Round", "#313131");
		p2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(p1);
		this.addChild(p2);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(7);
		b1.text = String(a);
		b = 1 + this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2 + this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		b2.text = String(a);
		d = 1 + this.raiz.sorteiaK(9);
		e3.text = String(d);
		//
		op1.text = "x";
		//
		this.resultado = new Array();
		this.resultado[0] = a;
		this.resultado[1] = b * c + d;
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b * c * d);
		this.novaOpcao(1 + this.raiz.sorteiaK(2 * this.resultado[0] - 1), this.resultado[1]);
		this.novaOpcao(this.resultado[0], 1 + this.raiz.sorteiaK(2 * this.resultado[1] - 1));
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([p1, b1, e1, p2, e2, op1, b2, e3]);
	}
	this.frame_42 = function() {
		// (a^b)^c x d^(bc)
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var p1 = new createjs.Text("( ", this.tSizes[0] + "px VAG Round", "#313131");
		p1.y = this.yys[0];
		var p2 = new createjs.Text(")", this.tSizes[0] + "px VAG Round", "#313131");
		p2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(p1);
		this.addChild(p2);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		a = 1 + this.raiz.sorteiaK(7);
		b1.text = String(a);
		b = 1 + this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2 + this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		d = 1 + this.raiz.sorteiaK(9);
		b2.text = String(d);
		e3.text = String(b * c);
		//
		op1.text = "x";
		//
		this.resultado = new Array();
		this.resultado[0] = a * d;
		this.resultado[1] = b * c;
		//
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a + d, this.resultado[1]);
		this.novaOpcao(this.resultado[0], b + c);
		this.novaOpcao(a + d, b + c);
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([p1, b1, e1, p2, e2, op1, b2, e3]);
	}
	this.frame_44 = function() {
		// (a^b)^c : a^d
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var p1 = new createjs.Text("( ", this.tSizes[0] + "px VAG Round", "#313131");
		p1.y = this.yys[0];
		var p2 = new createjs.Text(")", this.tSizes[0] + "px VAG Round", "#313131");
		p2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(p1);
		this.addChild(p2);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		a = 1+this.raiz.sorteiaK(7);
		b1.text = String(a);
		b2.text = String(a);
		b = 1+this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2+this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		d = 1+this.raiz.sorteiaK(b*c-1);
		e3.text = String(d);
		//
		op1.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0]=a;
		this.resultado[1]=b*c-d;
		//
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador=0;
		this.novaOpcao(this.resultado[0],this.resultado[1]);
		this.novaOpcao(a*b,c+d);
		this.novaOpcao(this.resultado[0],b*c+d);
		this.novaOpcao(a*b,d);
		//
		while(this.contador<this.opcoes.length){
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([p1,b1,e1,p2,e2,op1,b2,e3]);
	}
	this.frame_46 = function() {
		// (a^b)^c : d^(bc)
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var p1 = new createjs.Text("( ", this.tSizes[0] + "px VAG Round", "#313131");
		p1.y = this.yys[0];
		var p2 = new createjs.Text(")", this.tSizes[0] + "px VAG Round", "#313131");
		p2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(p1);
		this.addChild(p2);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		a = this.lista[this.raiz.sorteiaK(this.lista.length)];
		b1.text = String(a);
		b = 1 + this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2 + this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		var lista2 = this.getDivisores(a);
		d = lista2[this.raiz.sorteiaK(lista2.length)];
		b2.text = String(d);
		e3.text = String(b * c);
		//
		op1.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = Math.floor(a / d);
		this.resultado[1] = b * c;
		//
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a * b, b + c);
		this.novaOpcao(this.resultado[0], b + c);
		this.novaOpcao(a - d, this.resultado[1]);
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([p1, b1, e1, p2, e2, op1, b2, e3]);
	}
	this.frame_55 = function() {
		// a^(b^c) x a^d
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		a = 1+this.raiz.sorteiaK(9);
		b1.text = String(a);
		b = 1+this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2+this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		b2.text = String(a);
		d = 1+this.raiz.sorteiaK(9);
		e3.text = String(d);
		//
		op1.text="x";
		//
		this.resultado = new Array();
		this.resultado[0]=a;
		this.resultado[1]=Math.pow(b,c)+d;
		//
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador=0;
		this.novaOpcao(this.resultado[0],this.resultado[1]);
		this.novaOpcao(a,b*c+d);
		this.novaOpcao(a,b+c+d);
		this.novaOpcao(a*b,b*c+d);
		//
		while(this.contador<this.opcoes.length){
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1,e1,e2,op1,b2,e3]);
	}
	this.frame_57 = function() {
		// a^(b^c) x d^(b^c)
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		//
		a = 1+this.raiz.sorteiaK(9);
		b1.text = String(a);
		b = 1+this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2+this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		d = 1+this.raiz.sorteiaK(7);
		b2.text = String(d);
		e3.text = String(Math.pow(b,c));
		//
		op1.text="x";
		//
		this.resultado = new Array();
		this.resultado[0]=a*d;
		this.resultado[1]=Math.pow(b,c);
		//
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador=0;
		this.novaOpcao(this.resultado[0],this.resultado[1]);
		this.novaOpcao(a+d,b*c);
		this.novaOpcao(a*b,b*c);
		this.novaOpcao(a+b,b+c);
		//
		while(this.contador<this.opcoes.length){
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1,e1,e2,op1,b2,e3]);
	}
	this.frame_59 = function() {
		// a^(b^c) : a^d
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		//
		a = 1 + this.raiz.sorteiaK(9);
		b1.text = String(a);
		b = 1 + this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2 + this.raiz.sorteiaK(3);
		e2.text = String(c);
		//
		b2.text = String(a);
		d = 1 + this.raiz.sorteiaK(Math.pow(b, c) - 1);
		e3.text = String(d);
		//
		op1.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = a;
		this.resultado[1] = Math.pow(b, c) - d;
		//
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a, b * c + d);
		this.novaOpcao(a * a, b * c - Math.min(d, b * c - 1));
		this.novaOpcao(a * a, b * c + d);
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1, e1, e2, op1, b2, e3]);
	}
	this.frame_61 = function() {
		// a^(b^c) : d^(b^c)
		this.stop();
		this.removeAllChildren();
		
		var b1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b1.y = this.yys[0];
		var b2 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		b2.y = this.yys[0];
		var op1 = new createjs.Text("", this.tSizes[0] + "px VAG Round", "#313131");
		op1.y = this.yys[0];
		
		var e1 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e1.y = this.yys[1];
		var e2 = new createjs.Text("", this.tSizes[2] + "px VAG Round", "#313131");
		e2.y = this.yys[2];
		var e3 = new createjs.Text("", this.tSizes[1] + "px VAG Round", "#313131");
		e3.y = this.yys[1];
		
		this.addChild(b1);
		this.addChild(b2);
		this.addChild(op1);
		this.addChild(e1);
		this.addChild(e2);
		this.addChild(e3);
		//
		var a, b, c, d, e, f;
		//
		a = this.lista[this.raiz.sorteiaK(this.lista.length)];
		b1.text = String(a);
		b = 1 + this.raiz.sorteiaK(3);
		e1.text = String(b);
		c = 2 + this.raiz.sorteiaK(3);
		e2.text = String(c);
		
		//
		var lista2 = this.getDivisores(a);
		d = lista2[this.raiz.sorteiaK(lista2.length)];
		b2.text = String(d);
		e3.text = String(Math.pow(b, c));
		//
		op1.text = ":";
		//
		this.resultado = new Array();
		this.resultado[0] = Math.floor(a / d);
		this.resultado[1] = Math.pow(b, c);
		//
		this.raiz.baralhaArray(this.opcoes);
		this.contador = 0;
		this.novaOpcao(this.resultado[0], this.resultado[1]);
		this.novaOpcao(a - d, b * c);
		this.novaOpcao(a + d, b + c);
		this.novaOpcao(a * d, b * c);
		//
		while (this.contador < this.opcoes.length) {
			this.novaOpcaoAleatoria();
		}
		//
		this.arruma([b1, e1, e2, op1, b2, e3]);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(2).call(this.frame_8).wait(2).call(this.frame_10).wait(2).call(this.frame_12).wait(4).call(this.frame_16).wait(4).call(this.frame_20).wait(2).call(this.frame_22).wait(2).call(this.frame_24).wait(2).call(this.frame_26).wait(2).call(this.frame_28).wait(2).call(this.frame_30).wait(2).call(this.frame_32).wait(2).call(this.frame_34).wait(6).call(this.frame_40).wait(2).call(this.frame_42).wait(2).call(this.frame_44).wait(2).call(this.frame_46).wait(9).call(this.frame_55).wait(2).call(this.frame_57).wait(2).call(this.frame_59).wait(2).call(this.frame_61).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313131").s().p("AgeCdQgIgHAAgJQAAgFAEgIQAWg8AAhEQAAhDgWg9QgEgHAAgFQAAgKAIgGQAJgGAKAAQAOAAAJAXQAGANAGAVQAPAwAAA4QAAA7gPAwQgLAogLALQgEAFgJABQgKAAgJgGg");
	this.shape.setTransform(21.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313131").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAKgKAMAAQAJAAAHAFQAIAEAEAIQAFAHgBAIQABANgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_1.setTransform(10.7,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313131").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAKgKAMAAQAIAAAIAFQAHAEAFAIQAFAHgBAIQAAANgJAKQgKAKgNAAQgNAAgJgKg");
	this.shape_2.setTransform(-1.2,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#313131").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAKgKAMAAQAJAAAHAFQAHAEAFAIQAEAHAAAIQAAANgJAKQgJAKgOAAQgMAAgKgKg");
	this.shape_3.setTransform(-13.1,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#313131").s().p("AgLCMQgGgNgGgVQgPgwAAg7QAAgbAEgaQADgaAIgZQAMgpAKgKQAEgGAJAAQAKAAAJAGQAIAGAAAKQgBAGgCAGQgXA9AABDQAABEAXA8QADAIAAAFQAAAJgIAHQgJAGgKAAQgOgBgJgWg");
	this.shape_4.setTransform(-24.1,0.5);

	this.e3 = new cjs.Text("?", "32px 'VAG Round'", "#313131");
	this.e3.name = "e3";
	this.e3.lineHeight = 38;
	this.e3.lineWidth = 16;
	this.e3.parent = this;
	this.e3.setTransform(65.5,-29);

	this.b2 = new cjs.Text("?", "40px 'VAG Round'", "#313131");
	this.b2.name = "b2";
	this.b2.textAlign = "center";
	this.b2.lineHeight = 47;
	this.b2.lineWidth = 37;
	this.b2.parent = this;
	this.b2.setTransform(50,-25);

	this.op1 = new cjs.Text("?", "40px 'VAG Round'", "#313131");
	this.op1.name = "op1";
	this.op1.textAlign = "center";
	this.op1.lineHeight = 47;
	this.op1.lineWidth = 22;
	this.op1.parent = this;
	this.op1.setTransform(13,-24.9);

	this.e2 = new cjs.Text("?", "26px 'VAG Round'", "#313131");
	this.e2.name = "e2";
	this.e2.lineHeight = 31;
	this.e2.lineWidth = 13;
	this.e2.parent = this;
	this.e2.setTransform(-22.5,-40.1);

	this.e1 = new cjs.Text("?", "32px 'VAG Round'", "#313131");
	this.e1.name = "e1";
	this.e1.lineHeight = 38;
	this.e1.lineWidth = 16;
	this.e1.parent = this;
	this.e1.setTransform(-43,-31);

	this.b1 = new cjs.Text("?", "40px 'VAG Round'", "#313131");
	this.b1.name = "b1";
	this.b1.textAlign = "center";
	this.b1.lineHeight = 47;
	this.b1.lineWidth = 37;
	this.b1.parent = this;
	this.b1.setTransform(-58.5,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.b1},{t:this.e1},{t:this.e2},{t:this.op1},{t:this.b2},{t:this.e3}]},61).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-26.5,104,48.5);


(lib.TopLayer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.first == undefined) {
			this.first = true;
			this.titulo.text = this.parent.titulo;
			this.subtitulo.text = this.parent.subtitulo;
			this.updateTitulo = function (newStr) {
				this.titulo.text = newStr;
			}
			this.updateSubTitulo = function (newStr) {
				this.subtitulo.text = newStr;
			}
			//
			this.removeAllEventListeners("click");
			this.iniBut.addEventListener("click", goHome.bind(this));
			function goHome() {
				this.parent.gotoAndPlay("home");
			}
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// titulo e subtitulo
	this.subtitulo = new cjs.Text("titulo", "20px 'VAG Round'", "#41B9F0");
	this.subtitulo.name = "subtitulo";
	this.subtitulo.lineHeight = 24;
	this.subtitulo.lineWidth = 753;
	this.subtitulo.parent = this;
	this.subtitulo.setTransform(67.1,102);

	this.titulo = new cjs.Text("titulo", "30px 'VAG Round'", "#313131");
	this.titulo.name = "titulo";
	this.titulo.lineHeight = 35;
	this.titulo.lineWidth = 395;
	this.titulo.parent = this;
	this.titulo.setTransform(52,51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titulo},{t:this.subtitulo}]}).wait(2));

	// botao iniciar
	this.iniBut = new lib.iniciarBut();
	this.iniBut.parent = this;
	this.iniBut.setTransform(860,75.4,0.714,0.714);
	new cjs.ButtonHelper(this.iniBut, 0, 1, 2, false, new lib.iniciarBut(), 3);

	this.timeline.addTween(cjs.Tween.get(this.iniBut).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50,49.9,835,79.1);


(lib.TopLayernormal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.first == undefined) {
			this.first = true;
			this.titulo.text = this.parent.titulo;
		
			this.butStart.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
			function fl_ClickToGoToAndPlayFromFrame() {
				this.parent.gotoAndPlay("ini");
			}
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// titulo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313131").s().p("AgdB1QgMgDgEgKQgFgKADgMIApiVIgPgEQgLgDgFgIQgGgIADgKQADgKAIgEQAJgEAKACIAmALQAMADAGAJQAFAJgEANIgtCnQgCALgJAHQgFAEgIAAIgHgBg");
	this.shape.setTransform(434.7,170.1);

	this.titulo = new cjs.Text("titulo", "30px 'VAG Round'", "#313131");
	this.titulo.name = "titulo";
	this.titulo.textAlign = "center";
	this.titulo.lineHeight = 35;
	this.titulo.lineWidth = 496;
	this.titulo.parent = this;
	this.titulo.setTransform(460,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titulo},{t:this.shape}]}).wait(2));

	// buts
	this.butStart = new lib.startBut2();
	this.butStart.parent = this;
	this.butStart.setTransform(730,330,0.857,0.857,0,0,0,35,35);
	new cjs.ButtonHelper(this.butStart, 0, 1, 2, false, new lib.startBut2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.butStart).wait(2));

	// mask capa (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkHAaVQi/AAAAi+MAAAgusQAAi/C/AAMBIPAAAQC/AAAAC/IAAO5QgxgJg2AAQjoAAikCkQikCkAADnQAADoCkCkQCkCkDoAAQA2AAAxgJIAAOmQAAC+i/AAg");
	mask.setTransform(460,300);

	// capa
	this.instance = new lib.capa_normal();
	this.instance.parent = this;
	this.instance.setTransform(203,120,0.855,0.855);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("AwoO1IAA+OMAhRAAAIAAez");
	this.shape_1.setTransform(529.5,348.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EglgAbWQjHAAAAjGMAAAgwfQAAjGDHAAMBLBAAAQDHAAAADGIAAR8QhaguhuAAQi6AAiECFQiECDAAC5QAAC6CDCEIABAAQCECEC6AAQBuAABagtIAAR7QAADGjHAAgAHNZWQAZAMAhAGISSAAQA4gKAaghQASgXAAgiQAAgggSgYIgLgMIAA+zMghRAAAIAAeOQgMAKgJAOQgUAfAAAeQAAAgAIAOQAPAYAvAOQB4AiGDgQg");
	this.shape_2.setTransform(460,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,125,530,350);


(lib.scoreBola = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{talvez:0,sel:4,certo:9,errado:14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(6));

	// Layer 1
	this.instance = new lib.talvez2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.053,1.053);

	this.instance_1 = new lib.talvez3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.053,1.053);

	this.instance_2 = new lib.certo2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.053,1.053);

	this.instance_3 = new lib.errado2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.053,1.053);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Ascore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//definir fora o valor de maxBolas
		this.name = "scores";
		this.certas = 0;
		this.sit = 0;
		this.bolas = new Array();
		this.maxBolas = 10;
		this.inicio = function () {
			var d = 25;
			var wTotal = (this.maxBolas - 1) * d;
			var xx;
			var mc;
			this.bolas = [];
			for (var i = 0; i < this.maxBolas; i++) {
				xx = i * d;
				mc = new lib.scoreBola();
				mc.x = xx;
				mc.y = 0;
				this.addChild(mc);
				this.bolas.push(mc);
			}
			this.sit = 0;
		}
		//
		this.acertou = function (flag) {
			if (flag) {
				this.bolas[this.sit - 1].gotoAndStop("certo");
			} else {
				this.bolas[this.sit - 1].gotoAndStop("errado");
			}
		}
		//;
		this.avancar = function () {
			if (this.sit < this.maxBolas) {
				this.bolas[this.sit].gotoAndStop("sel");
				this.sit++;
			}
		}
		//
		this.reset = function () {
			this.removeAllChildren();
			this.bolas = new Array();
		}
		this.stop();
		this.jaEsta = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.scoreBola();
	this.instance.parent = this;
	this.instance.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ascore, new cjs.Rectangle(-9.6,-9.6,20,20), null);


(lib.feedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"certo":0,"errado":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.certo3("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.errado3("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.Resposta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.display.MovieClip;
		import flash.text.TextFieldAutoSize;
		import flash.events.MouseEvent;*/
		if (this.jaEsta == undefined) {
			this.jaEsta = true;
			var aqui = this;
			var raiz = this.parent;
			var potencia;
			var k;
			//
			this.base.textAlign = "left";
			this.expoente.textAlign = "left";
			this.base.mouseEnabled = false;
			this.expoente.mouseEnabled = false;
			//
			this.reset = function () {
				this.feedback.visible = false;
				raiz.enableBut(this.but, true);
				this.gotoAndStop(1);
			}
			this.setPot = function (b, e) {
				this.base.text = String(b);
				this.expoente.text = String(e);
				aqui.potencia = [b, e];
				var d = 3;
				var ww = this.base.getMeasuredWidth() + this.expoente.getMeasuredWidth() - d;
				this.base.x = -ww * 0.5;
				this.expoente.x = this.base.x + this.base.getMeasuredWidth() - d;
			}
			//
			this.but.removeEventListener("click", escolheMe.bind(this));
			this.but.addEventListener("click", escolheMe.bind(this));
			function escolheMe() {
				//alert("escolheMe")
				raiz.potEscolhida = aqui.potencia;
				raiz.kEscolhido = aqui.k;
				raiz.enableBut(raiz.okBut, true);
				for (var i = 0; i < raiz.respostas.length; i++) {
					raiz.respostas[i].gotoAndStop(1);
				}
				aqui.gotoAndStop(2);
			}
		}
	}
	this.frame_1 = function() {
		this.stop();
		this.but.mouseEnabled = true;
	}
	this.frame_2 = function() {
		this.stop();
		this.but.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 2
	this.feedback = new lib.feedback();
	this.feedback.parent = this;
	this.feedback.setTransform(40,-40,1.579,1.579);

	this.expoente = new cjs.Text("bb", "30px 'VAG Round'", "#313131");
	this.expoente.name = "expoente";
	this.expoente.lineHeight = 35;
	this.expoente.lineWidth = 51;
	this.expoente.parent = this;
	this.expoente.setTransform(2,-25);

	this.base = new cjs.Text("bb", "36px 'VAG Round'", "#313131");
	this.base.name = "base";
	this.base.lineHeight = 42;
	this.base.lineWidth = 50;
	this.base.parent = this;
	this.base.setTransform(-47,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base},{t:this.expoente},{t:this.feedback}]}).wait(3));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("AjhGQQiuAAAAiuIAAnDQAAiuCuAAIHDAAQCuAAAACuIAAHDQAACuiuAAg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// Layer 1
	this.but = new lib.BotaoSimples();
	this.but.parent = this;
	this.but.setTransform(0,0,1.143,1.143);
	new cjs.ButtonHelper(this.but, 0, 1, 2, false, new lib.BotaoSimples(), 3);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-55,104,95);


// stage content:
(lib.APotenciaCerta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{home:2,ini:9,"new":13,fim:20});

	// timeline functions:
	this.frame_0 = function() {
		this.titulo = "A potência certa";
		this.subtitulo = "Descobre a potência do motor";
		//
		this.raiz = this;
		this.maxQuestoes = 10;
		this.certas;
		this.kCerto;
		this.kEscolhido;
		this.nJogada=0;
		//
		this.respostas=[this.r1,this.r2,this.r3,this.r4];
		this.potEscolhida;
		this.enableBut = function (but, flag) {
			but.mouseEnabled = flag;
			if (flag) {
				but.alpha = 1;
			} else {
				but.alpha = 0.25;
			}
		}
		
		this.baralhaArray = function (lista) {
			var n = lista.length;
			var newLista = new Array();
			for (var i = 0; i < n; i++) {
				var k = Math.floor(Math.random() * lista.length * 0.9999);
				newLista[i] = lista[k];
				lista.splice(k, 1);
			}
			for (i = 0; i < n; i++) {
				lista[i] = newLista[i];
			}
		}
		this.sorteiaK = function (k) {
			return Math.floor(Math.random() * k);
		}
		//
		function novaJogada() {
			this.nJogada++;
			if (this.nJogada < this.maxQuestoes) {
				this.gotoAndPlay("new");
			} else {
				this.gotoAndPlay("fim");
			}
		}
		//
		function verificacao() {
			this.enableBut(this.okBut,false);
			for (var i=0; i<this.respostas.length; i++) {
				this.enableBut(this.respostas[i].but,false);
			}
			//var potCerta = Math.pow(expressao.resultado[0],expressao.resultado[1]);
			//var potEsc = Math.pow(potEscolhida[0],potEscolhida[1]);
			var flagCerto = this.kEscolhido == this.kCerto;
			if (flagCerto) {
				this.respostas[this.kEscolhido].feedback.gotoAndStop("certo");
				this.respostas[this.kEscolhido].feedback.visible = true;
				this.certas++;
			} else {
				this.respostas[this.kEscolhido].feedback.gotoAndStop("errado");
				this.respostas[this.kCerto].feedback.gotoAndStop("certo");
				this.respostas[this.kEscolhido].feedback.visible = true;
				this.respostas[this.kCerto].feedback.visible = true;
			}
			this.scores.acertou(flagCerto);
			this.enableBut(this.nextBut,true);
		}
		this.okBut.addEventListener("click", verificacao.bind(this));
		this.nextBut.addEventListener("click", novaJogada.bind(this));
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		if (this.scores.maxBolas == undefined) {
			this.gotoAndPlay(this.currentFrame - 1);
		} else {
			this.scores.maxBolas = this.maxQuestoes;
			this.scores.reset();
			this.scores.inicio();
			//
			this.nJogada = 0;
			this.certas = 0;	
		}
	}
	this.frame_11 = function() {
		this.expressao.opcoes = [];
		for (i = 0; i < this.respostas.length; i++) {
			this.respostas[i].k = i;
			this.respostas[i].reset();
			this.expressao.opcoes[i] = this.respostas[i];
		}
		//
	}
	this.frame_13 = function() {
		this.scores.avancar();
		this.enableBut(this.okBut, false);
		this.enableBut(this.nextBut, false);
		//
		for (i = 0; i < this.respostas.length; i++) {
			this.respostas[i].reset();
		}
		//
		this.expressao.novo(Math.min(this.nJogada+1,7));
		//this.expressao.novo(7);
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
		this.topLayer2.updateSubTitulo("");
		var perc = Math.round(100 * this.certas / this.maxQuestoes);
		
		this.pontuacao.gotoAndStop(perc);
		this.pontuacao.texto.text = "Pontuação: "+perc+"%";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(7).call(this.frame_10).wait(1).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(6).call(this.frame_21).wait(1));

	// TopLayer
	this.instance = new lib.TopLayernormal();
	this.instance.parent = this;
	this.instance.setTransform(-1,43.5,1,1,0,0,0,-1,43.5);

	this.topLayer2 = new lib.TopLayer2();
	this.topLayer2.parent = this;
	this.topLayer2.setTransform(860,75.4,1,1,0,0,0,860,75.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},4).to({state:[{t:this.topLayer2}]},5).wait(13));

	// Camada 1
	this.instance_1 = new lib.Cortina();
	this.instance_1.parent = this;
	this.instance_1.setTransform(459.5,296,1,1,0,0,0,439.5,259);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},6).wait(7));

	// objectos
	this.instance_2 = new lib.capa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(425,283,0.745,0.745);

	this.expressao = new lib.expressaonumerica();
	this.expressao.parent = this;
	this.expressao.setTransform(300.4,205.1,0.97,0.97,0,0,0,0.5,-5.5);

	this.nextBut = new lib.nextBut();
	this.nextBut.parent = this;
	this.nextBut.setTransform(860,215,0.714,0.714);
	new cjs.ButtonHelper(this.nextBut, 0, 1, 2, false, new lib.nextBut(), 3);

	this.okBut = new lib.okBut();
	this.okBut.parent = this;
	this.okBut.setTransform(860,145,0.714,0.714);
	new cjs.ButtonHelper(this.okBut, 0, 1, 2, false, new lib.okBut(), 3);

	this.instance_3 = new lib.motor();
	this.instance_3.parent = this;
	this.instance_3.setTransform(315.7,374.1,1,1,0,0,0,228.5,152);

	this.r4 = new lib.Resposta();
	this.r4.parent = this;
	this.r4.setTransform(744.3,456.3,1,1,0,0,0,3,-7.5);

	this.r3 = new lib.Resposta();
	this.r3.parent = this;
	this.r3.setTransform(635.3,364.4,1,1,0,0,0,3,-7.5);

	this.r2 = new lib.Resposta();
	this.r2.parent = this;
	this.r2.setTransform(753.3,257.4,1,1,0,0,0,3,-7.5);

	this.r1 = new lib.Resposta();
	this.r1.parent = this;
	this.r1.setTransform(642.3,176.9,1,1,0,0,0,3,-7.5);

	this.scores = new lib.Ascore();
	this.scores.parent = this;
	this.scores.setTransform(550.4,75.4,1,1,0,0,0,0.4,0.4);

	this.pontuacao = new lib.Pontuacao();
	this.pontuacao.parent = this;
	this.pontuacao.setTransform(130.6,299,1,1,0,0,0,-326.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},4).to({state:[{t:this.scores},{t:this.r1},{t:this.r2},{t:this.r3},{t:this.r4},{t:this.instance_3},{t:this.okBut},{t:this.nextBut},{t:this.expressao}]},5).to({state:[]},7).to({state:[{t:this.pontuacao}]},4).wait(2));

	// back
	this.instance_4 = new lib.Alayoufundo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(460.1,307.5,1,1,0,0,0,460.1,307.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(460,307.5,920,615);
// library properties:
lib.properties = {
	width: 920,
	height: 615,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/APotenciaCerta_atlas_.png?1496744765178", id:"APotenciaCerta_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;