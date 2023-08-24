import { component$ } from "@builder.io/qwik";
import ContentComponent from "~/sdk-src/content";

export default component$(() => {
  const CONTENT = [
    {
      testName: "ORIGINAL",
    },
  ];
  return (
    <div>
      <ContentComponent blocks={CONTENT} />
    </div>
  );
});
