type EventCallback = (...args:any) => void;

export abstract class EventEmitter extends EventTarget {
	/**@param {string} eventName The name of the event
	 * @param  {...any} args The arguments that will be passed to the listener*/
	protected emit(eventName:string, ...args:any):void;

	/**@param {string} eventName The name of the event
	 * @param {EventCallback} listener The callback function*/
	on(eventName:string, listener:EventCallback):void;

	/**@param {string} eventName The name of the event
	 * @param {EventCallback} listener The callback function*/
	once(eventName:string, listener:EventCallback):void;

	/**@param {string} eventName The name of the event
	 * @param {EventCallback} listener The callback function*/
	off(eventName:string, listener:EventCallback):void;
}
