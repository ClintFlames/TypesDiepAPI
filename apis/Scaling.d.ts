import { Vector } from "../core/Vector";

export class Scaling {
	#scalingFactor:number;
	#drawSolidBackground:boolean;

	constructor();

	get windowRatio():number;

	get scalingFactor():number;

	get fov():number;

	/**@param {Vector} v The vector in canvas units
	 * @returns {Vector} The vector in arena units*/
	toArenaUnits(v:Vector):Vector;

	/**@param {Vector} v The vector in arena units
	 * @returns {Vector} The vector in canvas units*/
	toCanvasUnits(v:Vector):Vector;

	/**Will translate coordinates from canvas to arena
	 * @param {Vector} canvasPos The canvas coordinates
	 * @returns {Vector} The `canvasPos` translated to arena coordinates*/
	toArenaPos(canvasPos:Vector):Vector;

	/**Will translate coordinates from arena to canvas
	 * @param {Vector} arenaPos The arena coordinates
	 * @returns {Vector} The `arenaPos` translated to canvas coordinates*/
	toCanvasPos(arenaPos:Vector):Vector;

	screenToCanvasUnits(n:number):number;

	canvasToScreenUnits(n:number):number;

	/**Will translate coordinates from screen to canvas
	 * @param v The screen coordinates
	 * @returns The canvas coordinates*/
	screenToCanvas(v: Vector):Vector;

	/**Will translate coordinates from canvas to screen
	 * @param v The canvas coordinates
	 * @returns the screen coordinates*/
	canvasToScreen(v:Vector):Vector;
}