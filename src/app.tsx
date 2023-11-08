import { defineComponent } from "vue";

export const App = defineComponent({
  setup() {
    return () => {
      return (
        <section class="p-16px">
          <div class="h-100px bg-yellow text-light flex justify-center items-center">Test</div>
          <div class="h-16px"></div>
          <div class="flex gap-10px text-14px">
            <input class="inline-block w-full max-w-400px px-0.5em b-solid b-slate b-1px hover:(b-blue) focus:(b-blue) outline-none" />
            <button class="py-5px px-16px bg-blue text-white">从我的方案选择</button>
          </div>
          <div class="h-16px"></div>
          <div>
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 overflow-hidden dark:bg-slate-800">
              <img
                class="block w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="https://plus.unsplash.com/premium_photo-1694825173178-3d2c9bbf5b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
                width="384"
                height="512"
              />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale on
                    large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>
      );
    };
  },
});
