import { component$ } from "@builder.io/qwik";
import ContentComponent from "~/sdk-src/content";

export default component$(() => {
  const CONTENT = {
    blocks: [
      {
        testName: "ORIGINAL",
        id: 1,
      },
    ],
  };
  return (
    <div>
      <ContentComponent content={CONTENT} />
    </div>
  );
});
