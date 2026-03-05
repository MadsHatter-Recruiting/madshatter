export type PriorityRewrite = {
  original: string;
  improved: string;
  why: string;
};

export type BaseReview = {
  recruiter_score: number;
  score_rationale: string;
  top_fixes: string[];
  strengths: string[];
  issues: string[];
  priority_rewrites: PriorityRewrite[];
  next_steps: string[];
};

export type GeneralReview = BaseReview;

export type TargetedReview = BaseReview & {
  match_score: number;
  missing_keywords: string[];
  tailored_summary: string;
};

export type ReviewResponse = GeneralReview | TargetedReview;

export const isTargetedReview = (review: ReviewResponse): review is TargetedReview => {
  return "match_score" in review;
};
