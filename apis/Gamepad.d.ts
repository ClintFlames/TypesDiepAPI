export class Gamepad {
	#axes:number[];
	#buttons:{ pressed:boolean }[];
	connected:boolean;

	/**Emulates a Gampad
	 * when `gamepad.connected` is set to `true` the game will
	 * ignore following keyboard inputs:
	 * 		W, A, S, D, upArrow, leftArrow, downArrow, rightArray
	 *      leftMouse, rightMouse, Spacebar, Shift,
	 *      MouseMovement to change tank angle
	 * these are also the only keys we emulate with this gamepad*/
	constructor();

	set  x(value:number):number;
	set  y(value:number):number;
	set mx(value:number):number;
	set my(value:number):number;

	set leftMouse (value:boolean):boolean;
	set rightMouse(value:boolean):boolean;

	get  x():number;
	get  y():number;
	get mx():number;
	get my():number;

	get leftMouse ():boolean;
	get rightMouse():boolean;

	#toGamepad():Gamepad;
}