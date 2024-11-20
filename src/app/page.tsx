import { fetchGitHubProjects } from '@/utils/github';
import Link from 'next/link';
import TextGradient from '@/components/TextGradient';

export default async function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Home Page with Bio */}
      <section className="mb-12 text-left">
        <h1 className="text-5xl font-bold mb-4">
          <TextGradient text="Hey, I'm Maxwell." />
        </h1>
        <p className="text-xl text-white">
          A software developer who loves to build cool apps, websites, and play with new innovative technologies.
        </p>
      </section>
    </div>
  );
}