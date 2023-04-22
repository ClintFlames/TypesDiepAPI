import { EventEmitter } from "../core/EventEmitter";
import { Vector } from "../core/Vector";

export class Player extends EventEmitter {
	#isDead:boolean;
	#mouseLock:boolean;
	#mouseCanvasPos:Vector;
	#mousePos:Vector;

	#username:string;
	#gamemode:string;
	#level:number;
	#tank:string;

	constructor();

	get position():Vector;
	get velocity():Vector;
	get mouse   ():Vector;
	get isDead  ():boolean;
	get gamemode():string;
	get level   ():number;
	get tank    ():string;

	/**Predict where this object will be after `time`
	 * @param time The time in ms*/
	predictPos(time:number):Vector;

	#ondead ():Promise<void>;
	#onspawn():Promise<void>;

	useGamepad(value:boolean):void;

	spawn(name:string):Promise<void>;

	upgrade_stat(id:number, level:number):Promise<void>;
	upgrade_tank(           index:number):Promise<void>;

	moveTo(arenaPos:Vector):void;
	lookAt(arenaPos:Vector):void;

	#onmousemove(e: MouseEvent   ):void;
	#onmousedown(e: MouseEvent   ):void;
	#onmouseup  (e: MouseEvent   ):void;
	#onkeydown  (e: KeyboardEvent):void;
	#onkeyup    (e: KeyboardEvent):void;
}