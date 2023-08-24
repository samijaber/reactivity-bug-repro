import { $, Slot, component$ } from "@builder.io/qwik";

type BuilderEditorProps = {
  contentState: { content: { blocks: { testName: string }[] } };
  children?: any;
  unused: { blocks: { testName: string }[] };
};

export const EnableEditor = component$((props: BuilderEditorProps) => {
  return (
    <>
      <button
        onClick$={$(() => {
          props.contentState.content!.blocks![0].testName = "UPDATE";
        })}
      >
        UPDATE TEXT
      </button>
      <Slot />
    </>
  );
});

export default EnableEditor;
