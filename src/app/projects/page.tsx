import { fetchGitHubProjects } from '@/utils/github';

export default async function ProjectsPage() {
  const projects = await fetchGitHubProjects('Msouch');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Projects Page */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {projects.slice(0, 8).map((project) => (
            <div 
              key={project.id} 
              className="border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
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
    </div>
  );
}