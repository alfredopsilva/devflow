import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(5).max(50),
  username: z.string().min(5).max(50),
  portfolioWebsite: z.string().url().optional(),
  location: z.string().min(5).max(50),
  bio: z.string().min(50).max(500).optional(),
});

export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(50),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const AnswerSchema = z.object({
  answer: z.string().min(100),
});
