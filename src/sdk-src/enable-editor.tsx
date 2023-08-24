import { $, Slot, component$ } from "@builder.io/qwik";

type BuilderEditorProps = {
  contentState: { testName: string };
  children?: any;
  unused: any;
};

export const EnableEditor = component$((props: BuilderEditorProps) => {
  return (
    <>
      <button
        onClick$={$(() => {
          props.contentState.testName = "UPDATE";
        })}
      >
        UPDATE TEXT
      </button>
      <Slot />
    </>
  );
});

export default EnableEditor;
