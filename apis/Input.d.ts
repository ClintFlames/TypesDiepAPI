export class Input {
	#gameCanvas:HTMLCanvasElement;

	constructor();

	keyDown(key:string|number):void;

	keyUp(key:string|number):void;

	keyPress(key:number):Promise<void>;

	mouse(x:number, y:number):void;

	#toKeyCode(key:string):number;
}