
import {SymbolTree} from "./SymbolTree"
import Character from "./Character"

import { combinePriority } from "./Priority"


export class SymbolRecommender {
	tree: SymbolTree
	constructor(){
		this.tree = new SymbolTree()
	}
	addSymbolSet(characters: Character[]) : void{
		for (const c of characters){
			/*for (const k of c.strokes){
				this.tree.insert(k, c)
			}*/
		}
		console.log(this.tree)
		debugger

	}	

	suggest(search: string) : Map<Character, number>{
		let map = this.tree.getCharacterSet(search)
		//let start = new Date().getTime();

		
		//const end = new Date().getTime();
		//const time = end - start;
		//console.log(start)
		//console.log('Execution time (ms): ' + time);
		//todo sort
		return map
	}
}