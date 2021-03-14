export interface IBlock {
    id: string;
    bgColor: string;
    percent: number;
    width: number;
 }

 export interface IBlockAction{
    type: string;
    block: IBlock;
}