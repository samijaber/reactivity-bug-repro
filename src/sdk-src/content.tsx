import EnableEditor from "./enable-editor";
import { component$, useStore } from "@builder.io/qwik";

export const ContentComponent = component$<{
  blocks: { testName: string }[];
}>((props) => {
  const state = useStore(props.blocks); // BROKEN
  // const state = useStore(clone(props.blocks)); // WORKS

  return (
    <EnableEditor
      // LOOK HERE!!!
      // COMMENT THIS `unused` PROP OUT TO SEE THE CODE WORK.
      // unused={'anything'} // WORKS
      // unused={props.blocks} // BROKEN
      // unused={props.blocks[0]} // BROKEN
      unused={props.blocks[0].testName} // BROKEN
      contentState={state[0]}
    >
      <div>BLOCKS (outside loop): {state[0]?.testName}</div>
      {state.map((block, idx) => (
        <div key={idx}>
          BLOCKS (inside loop): <span>{block.testName}</span>
        </div>
      ))}
    </EnableEditor>
  );
});

export default ContentComponent;

function clone<T>(val: T): T {
  return JSON.parse(JSON.stringify(val));
}
