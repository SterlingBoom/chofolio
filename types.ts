import { ChangeEvent } from "react";
export type user = {
  name: string;
  id: number;
  age: number;
};

export type Portfolio = {
  name: string;
  role: string;
  about: string;
  skills: Skills[];
  github_username: string;
  unique_id: string;
  username: string;
  workXP?: Array<Work>;
};

export type Work = {
  title: string;
  company: string;
  description: string;
  start: string;
  end: string;
};

export type Skills = {
  language: string;
  level: Level;
};
export enum Level {
  beginner = "Begineer",
  junior = "Junior",
  intermediate = "Intermediate",
  senior = "Senior",
  expert = "Expert",
}
export interface ckedit {
  data: ChangeEvent<HTMLInputElement>;
}

export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: Language | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: Visibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: DefaultBranch;
}

export enum DefaultBranch {
  Main = "main",
  Master = "master",
}

export enum Language {
  CSS = "CSS",
  HTML = "HTML",
  JavaScript = "JavaScript",
}

export interface Owner {
  login: Login;
  id: number;
  node_id: NodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: FollowingURL;
  gists_url: GistsURL;
  starred_url: StarredURL;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersCermuelEventsPrivacy = "https://api.github.com/users/cermuel/events{/privacy}",
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersCermuelFollowingOtherUser = "https://api.github.com/users/cermuel/following{/other_user}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersCermuelGistsGistID = "https://api.github.com/users/cermuel/gists{/gist_id}",
}

export enum Login {
  Cermuel = "cermuel",
}

export enum NodeID {
  MDQ6VXNlcjgxNTI0Njg0 = "MDQ6VXNlcjgxNTI0Njg0",
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersCermuelStarredOwnerRepo = "https://api.github.com/users/cermuel/starred{/owner}{/repo}",
}

export enum Type {
  User = "User",
}

export enum Visibility {
  Public = "public",
}
