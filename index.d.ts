interface DiepApi {
	apis      :import("./apis/index"      ).Apis,
	core      :import("./core/index"      ).Core,
	extensions:import("./extensions/index").Extensions,
	tools     :import("./tools/index"     ).Tools,
	types     :import("./types/index"     ).Types
}

interface Window {
	diepAPI:DiepApi
}