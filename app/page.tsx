import Categories from '@/src/components/Categories';
import Hero from '@/src/components/Hero';
import NewDrops from '@/src/components/NewDrops';
import Reviews from '@/src/components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </main>
  );
}
