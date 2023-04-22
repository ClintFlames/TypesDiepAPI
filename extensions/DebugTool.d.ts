import { Vector } from "../core/Vector";
import { Entity } from "../types/Entity";
import { Extension } from "./Extension";

export class DebugTool extends Extension {
	#drawBoundingBox:boolean;
	#drawVelocity   :boolean;
	#drawParent     :boolean;
	#drawInfo       :boolean;
	#drawStats      :boolean;

	constructor();

	drawAll(v:boolean):void;
	drawBoundingBox(v:boolean):void;
	drawVelocity(v:boolean):void;
	drawParent(v:boolean):void;
	drawInfo  (v:boolean):void;
	drawStats (v:boolean):void;
	#_drawboundingBox(entity:Entity, position:Vector, dimensions:Vector):void;
	#_drawVelocity(position:Vector, futurePos:Vector):void;
	#_drawParent(entity:Entity, position:Vector):void;
	#_drawInfo(entity:Entity, position:Vector, dimensions:Vector):void;
	#_drawStats():void;
}