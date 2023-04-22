export class BackgroundOverlay {
	canvas:HTMLCanvasElement;
	ctx:CanvasRenderingContext2D;

	#gameCanvas:HTMLCanvasElement;
	#gameContext:CanvasRenderingContext2D;

	constructor();

	#onResize():void;
	#onFrame():void;
	#hookBackground():void;
}