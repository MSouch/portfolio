import { Octokit } from '@octokit/rest';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
}

export async function fetchGitHubProjects(username: string) {
  try {
    const octokit = new Octokit({
      // Optional: Add personal access token for higher rate limits
      // auth: process.env.GITHUB_TOKEN 
    });

    const { data } = await octokit.repos.listForUser({ 
      username, 
      sort: 'updated',
      direction: 'desc'
    });

    // Filter out archived repos and add type safety
    return data.slice(0, 8) as GitHubRepo[]; // Limit to 6 most recent projects
  } catch (error) {
    console.error('Failed to fetch GitHub projects:', error);
    return [];
  }
}