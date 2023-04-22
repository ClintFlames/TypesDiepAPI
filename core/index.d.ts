export interface Core {
	CanvasKit   :typeof import("./CanvasKit"   ).CanvasKit,
	EventEmitter:typeof import("./EventEmitter").EventEmitter,
	Movement    :typeof import("./Movement"    ).Movement,
	Vector      :typeof import("./Vector"      ).Vector
}