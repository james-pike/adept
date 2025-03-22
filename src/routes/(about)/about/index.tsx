import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/widgets/About";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <About  
      title="About TestLock"
      subtitle="About page"
      highlight="About"
      items={[]}
      classes={{
        
    
      }}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};