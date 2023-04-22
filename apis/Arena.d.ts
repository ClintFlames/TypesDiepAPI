import { Vector } from "../core/Vector";

export class Arena {
	#size:number;

	constructor();

	/**@returns {number} The Arena size in arena units*/
	get size():number;

	/**@param {Vector} vector The vector in [0, 1] coordinates
	 * @returns {Vector} The scaled vector in [-Arena.size/2, Arena.size/2] coordinates*/
	scale(vector:Vector):Vector;

	/**@param {Vector} vector - The scaled vector in [-Arena.size/2, Arena.size/2] coordinates
	 * @returns {Vector} The unscaled vector in [0, 1] coordinates*/
	unscale(vector: Vector):Vector;
}