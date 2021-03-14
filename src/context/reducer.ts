import { IBlock, IBlockAction } from "../models/block.interface";
import { ILink } from "../models/link.interface";



export const reducer = (state: {trackHeight: number, timelineWidth: number, blocks: IBlock[], links: ILink[]}, action: IBlockAction) => {
    switch (action.type) {
      // case "ADD_ARTICLE":
      //   return [
      //     ...state,
      //     {
      //       id: Math.random(), // not really unique but it's just an example
      //       title: action.article.title,
      //       body: action.article.body
      //     }
      //   ];
      default:
        return state;
    }
};