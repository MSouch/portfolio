import { fetchGitHubProjects, GitHubRepo } from '@/utils/github';
import Link from 'next/link';
import TextGradient from '@/components/TextGradient';

export default async function HomePage() {
  const projects = await fetchGitHubProjects('msouch');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Bio and Connect */}
      <section className="mb-12 grid md:grid-cols-3 gap-8 items-center justify-items-center">
        {/* Empty column for spacing */}
        <div className="hidden md:block"></div>

        {/* Centered Bio Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 whitespace-nowrap">
            <span className="text-4xl font-bold">
              <TextGradient text="Hello, I'm Maxwell Souchereau" />
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            A developer passionate about creating innovative solutions 
            and continuously learning new technologies.
          </p>
        </div>

        {/* Right-aligned Connect Section */}
        <div className="text-center md:text-right">
          <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="https://www.linkedin.com/in/maxwell-souchereau/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/msouch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              GitHub
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-green-600 hover:text-green-800"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Recent Projects</h2>
          <Link 
            href="https://github.com/MSouch?tab=repositories" 
            className="text-blue-600 hover:underline"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {projects.slice(0, 8).map((project) => (
            <div 
              key={project.id} 
              className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">
                {(project.description ?? '').length > 100 
                  ? `${project.description?.slice(0, 100)}...` 
                  : project.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {project.language}
                </span>
                <a 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Python', 'C#', 'Java', 'JavaScript', 'Next.js', 'React', 'TypeScript', 
            'Tailwind CSS', 'Node.js', 'Git'
          ].map((skill) => (
            <span 
              key={skill} 
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}