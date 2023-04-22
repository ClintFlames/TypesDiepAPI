import { EventEmitter } from "../core/EventEmitter";

/**Events:
 * - frame: Emitted every frame. Can be used for things that should be executed on every frame
 * - frame_end: Emitted after `frame` and is mainly used internally to update position variables
 * - state => (state): Emitted whenever the game changes its state: "home", "game", "stats", "loading", "captcha
 * - s_home: Emitted when the game changes its state to home
 * - s_game: Emitted when the game changes its state to game
 * - s_stats: Emitted when the game changes its state to stats
 * - s_loading: Emitted when the game changes its state to loading
 * - s_captcha: Emitted when the game changes its state to captcha*/
export class Game extends EventEmitter {
	#ready:boolean;
	#shadowRoot:ShadowRoot;

	constructor();

	#onframe():void;
	#onready():void;

	get state()    :string;
	get inHome()   :boolean;
	get inGame()   :boolean;
	get inStats()  :boolean;
	get inLoading():boolean;
	get isCaptcha():boolean;
}