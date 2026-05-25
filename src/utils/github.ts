export interface GitHubRepoStats {
  stars: number;
  forks: number;
  openIssues: number;
  language: string | null;
  pushedAt: Date;
  license: string | null;
}

function parseGitHubRepo(url: string): { owner: string; repo: string } | null {
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com') return null;
    const parts = u.pathname.replace(/^\//, '').replace(/\/$/, '').split('/');
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1] };
  } catch {
    return null;
  }
}

export async function fetchRepoStats(repoUrl: string): Promise<GitHubRepoStats | null> {
  const parsed = parseGitHubRepo(repoUrl);
  if (!parsed) return null;

  const { owner, repo } = parsed;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  const token = import.meta.env.GITHUB_TOKEN;
  if (token) headers['Authorization'] = `Bearer ${token}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      openIssues: data.open_issues_count,
      language: data.language ?? null,
      pushedAt: new Date(data.pushed_at),
      license: data.license?.spdx_id ?? null,
    };
  } catch {
    return null;
  }
}
