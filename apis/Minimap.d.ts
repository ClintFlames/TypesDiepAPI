import { Vector } from "../core/Vector";

/**The Minimap API*/
export class Minimap {
	#minimapDim :Vector;
	#minimapPos :Vector;

	#viewportDim:Vector;
	#viewportPos:Vector;

	#arrowPos   :Vector;

	#drawViewport:boolean;

	constructor();

	get minimapDim() :Vector;
	get minimapPos() :Vector;
	get viewportDim():Vector;
	get viewportPos():Vector;
	get arrowPos()   :Vector;

	#minimapHook():void;
	#viewportHook():any;
	#arrowHook():void;
}