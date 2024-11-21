import { fetchGitHubProjects } from '@/utils/github';
import Link from 'next/link';
import TextGradient from '@/components/TextGradient';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-9xl font-bold mb-6 text-center">
          <TextGradient text="Hey, I'm Maxwell."/>
        </h1>
        <p className="text-2xl text-white max-w-3xl text-center">
          A software developer who loves to build cool apps, websites, and play with new technologies.
        </p>
      </section>
    </div>
  );
}