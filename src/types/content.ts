import type { profile } from "@/data/profile";
import type { projects } from "@/data/projects";
import type { skills } from "@/data/skills";

export type Profile = typeof profile;
export type Projects = typeof projects;
export type Project = Projects[number];
export type SkillsLibrary = typeof skills;
export type SkillLibraryKey = keyof SkillsLibrary;
