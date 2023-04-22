import { Movement } from "../core/Movement";
import { Vector } from "../core/Vector";


export enum EntityType {
	Player,
	Bullet,
	Drone,
	Trap,
	Square,
	Triangle,
	Pentagon,
	AlphaPentagon,
	Crasher,
	UNKNOWN,
}

export enum EntityColor {
	TeamBlue         = "#00b2e1",
	TeamRed          = "#f14e54",
	TeamPurple       = "#bf7ff5",
	TeamGreen        = "#00e16e",
	Square           = "#ffe869",
	Triangle         = "#fc7677",
	Pentagon         = "#768dfc",
	AlphaPentagon    = "#768dfc",
	Crasher          = "#f177dd",
	NecromancerDrone = "#fcc376",
}

/**Represents an ingame Entity.
 * 
 * Holds minimal information currently.*/
export class Entity extends Movement {
	constructor(type:EntityType, parent:Entity, extras:any);

	updatePos(newPos:Vector):void;
}
