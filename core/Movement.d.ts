import { Vector } from "./Vector";

export class Movement {
	#position:Vector;
	#velocity:Vector;

	readonly #velocitySamplesSize:number;
	#velocitySamples:Vector[];
	#velocitySamplesIndex:number;
	#velocityLastNow:number;

	get position():Vector;

	/**Velocity in [diep_]units / second*/
	get velocity():Vector;

	/**Predict where this object will be after `time`
	 * @param time The time in ms.*/
	predictPos(time:number):Vector;
	
	protected updatePos(newPos:Vector):void;
	#updateVelocity(newPos:Vector):void;
}
