// ======= GreyCat Language Definition =======
// == Functions ==
declare function new_global_index(param: { id: string }): hash_index;
declare function hash(str: string): IHashRef;
declare function print(param: { src: any, dest?: any });
declare function load_master_index(): hash_index;
declare function load_global_index({ id: string }): hash_index;

// == Types ==
declare class node {
  [prop: string]: any;
}
declare class hash_index implements GIterable {
  configure(param: { prop: IHashRef }): void;
  add(param: { value: node });
  query(param: { value: string }): any;
  foreach(param: { it: IHashRef, sub: (i: number) => void });
}
declare type IHashRef = number;

// == Internal Types ==
declare interface GIterable {
  foreach(param: { it: IHashRef, sub: (i: number) => void });
}
// ===========================================