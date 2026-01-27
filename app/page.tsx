import Hero from "./components/Hero";
import Socialicons from "./components/Social-Icons";
import Categories from "./components/Categories";
import { getCategories } from "./lib/queries";

export default async function Home() {
  const categories = await getCategories();
  return (
     <section>
       <Hero/>
       <Socialicons/>
       <Categories categories={categories}/>
     </section>
  );
}
