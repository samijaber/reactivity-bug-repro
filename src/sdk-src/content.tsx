import EnableEditor from "./enable-editor";
import { component$, useStore } from "@builder.io/qwik";

export const ContentComponent = component$(
  (props: { content: { blocks: { testName: string; id: number }[] } }) => {
    const state = useStore({
      blocks: props.content.blocks,
    });

    return (
      <EnableEditor
        // LOOK HERE!!!
        // COMMENT THIS `unused` PROP OUT TO SEE THE CODE WORK.
        // unused={'anything'} // WORKS
        // unused={props.content} // BROKEN
        // unused={props.content.blocks} // BROKEN
        // unused={props.content.blocks[0]} // BROKEN
        unused={props.content.blocks[0].testName} // BROKEN
        contentState={state.blocks[0]}
      >
        <div>BLOCKS (outside loop): {state.blocks[0]?.testName}</div>
        {state.blocks.map((block) => (
          <div key={block.id}>
            BLOCKS (inside loop): <span>{block.testName}</span>
          </div>
        ))}
      </EnableEditor>
    );
  }
);

export default ContentComponent;
