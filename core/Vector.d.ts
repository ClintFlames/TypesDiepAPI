export class Vector {
	constructor(x:number, y:number);

	static len     (v:Vector            ):number;
	static round   (v:Vector            ):Vector;
	static scale   (r:number, v:Vector  ):Vector;
	static unscale (r:number, v:Vector  ):Vector;
	static add     (u:Vector, v:Vector  ):Vector;
	static subtract(u:Vector, v:Vector  ):Vector;
	static multiply(u:Vector, v:Vector  ):Vector;
	static divide  (u:Vector, v:Vector  ):Vector;
	static distance(u:Vector, v:Vector  ):number;
	/**Calculates the [centroid](https://en.wikipedia.org/wiki/Centroid)*/
	static centroid(...vertices:Vector[]):Vector;
	/**Calcutes the radius from a set of vertices that are placed on a circle*/
	static radius  (...vertices:Vector[]):number;
}