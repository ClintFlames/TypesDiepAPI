export class Extension {
	#loaded:boolean;

	constructor(onload:() => void);

	public load():void;
}
