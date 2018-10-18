// ======= GreyCat Language Definition =======
// == Native types ==
declare type Int = number;
declare type Double = number;
declare type IHashRef = Int;

// == Functions ==
declare function new_global_index(param: { id: string }): hash_index;
declare function hash(str: string): IHashRef;
declare function print(param: { src: any, dest?: any }): void;
declare function load_master_index(): hash_index;
declare function load_global_index(param: { id: string }): hash_index;
declare function repeat(param: { nb: number, sub: (i: number) => void }): void;
declare function new_timepoint(param: {}): timepoint;
declare function foreach(param: { src: Array<any>, sub: (i: number) => void }): void;

// == Types ==
declare class node {
  [prop: string]: any;
}
declare class hash_index implements Iterable {
  configure(param: { prop: IHashRef }): void;
  add(param: { value: node }): void;
  query(param: { value: string }): any;
  foreach(param: { sub: (i: number) => void }): void;
}
declare class timepoint {
  [prop: string]: any;
}

// == Internal Types ==
declare interface Iterable {
  foreach(param: { sub: (i: number) => void }): void;
}
// ===========================================