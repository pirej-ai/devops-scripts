// types.ts
import { Secret } from 'jsonwebtoken';

export type DockerImageName = string;
export type DockerContainerName = string;
export type DockerImageTag = string;
export type DockerRegistryUrl = string;

export type GiteaToken = string;
export type GiteaUrl = string;
export type GiteaRepoOwner = string;
export type GiteaRepoName = string;

export type GcpServiceAccountKey = Secret;
export type GcpServiceAccountEmail = string;
export type GcpProjectId = string;
export type GcpRegion = string;

export type SlackChannelName = string;
export type SlackWebhookUrl = string;
export type SlackUsername = string;

export type EmailSender = string;
export type EmailRecipient = string;
export type EmailSubject = string;
export type EmailBody = string;