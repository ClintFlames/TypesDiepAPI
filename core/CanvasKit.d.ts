import { Vector } from "./Vector";

export class CanvasKit {
	/**If you need a canvas then create it with this method.*/
	static createCanvas():HTMLCanvasElement;

	/**The consumer will be called before.*/
	static hookRAF(consumer:() => void):void;

	/**The consumer will be called before*/
	static hookCtx(
		method:string,
		consumer:(target:Function, thisArg:CanvasRenderingContext2D, args:any[]) => void
	):void;

	/**Replaces the function. Use `return Reflect.apply(target, thisArg, args);` in your function to call the original function.*/
	static overrideCtx(
		method:string,
		func:(target:Function, thisArg:CanvasRenderingContext2D, args:any[]) => any
	):void;

	/**Calls the callback method when a polygon with `numVertices` is being drawn.*/
	static hookPolygon(numVertices:number, cb:(vertices:Vector[], ctx:CanvasRenderingContext2D) => void):void;
}
