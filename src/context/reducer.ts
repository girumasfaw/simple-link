import { IBlock, IBlockAction } from "../models/block.interface";
import { ILink } from "../models/link.interface";



export const reducer = (state: {trackHeight: number, timelineWidth: number, blocks: IBlock[], links: ILink[]}, action: IBlockAction) => {
    switch (action.type) {
      default:
        return state;
    }
};