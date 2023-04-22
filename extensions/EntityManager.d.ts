import { Vector } from "../core/Vector";
import { Entity, EntityType } from "../types/Entity";
import { Extension } from "./Extension";


/**Entity Manager is used to access the information about the entities, that are currently drawn on the screen.
 * To access the entities the EntityManager exposes the EntityManager.entities field.*/
export class EntityManager extends Extension {
	#entities:Entity[];
	#entitiesLastFrame:Entity[];

	constructor();

	get entities():Entity[];

	/**@returns The own player entity*/
	getPlayer():Entity;

	/**Adds the entity to `#entities`.
	 *
	 * Will either find the entity in `#entitiesLastFrame` or create a new `Entity`.*/
	#add(type:EntityType, position:Vector, extras?:object):void;

	/**If an entity is newly created, try to find it"s parent entity.*/
	#findParent(type:EntityType, position:Vector):Entity;

	/**Searches `#entitiesLastFrame` for the entity that is closest to `position`
	 * @returns the entity or null if there is no match.*/
	#findEntity(type:EntityType, position:Vector, tolerance?:number):Entity;

	#triangleHook():void;
	#squareHook():void;
	#pentagonHook():void;
	#playerHook():void;
}