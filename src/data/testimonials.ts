import { TestimonialItem } from "@/types";

/**
 * Per Section 2, 5.1.8, and 5.9 of the Website Development Specification:
 * - Do not fabricate star ratings, customer counts, or customer quotes.
 * - Publish only genuine customer feedback with explicit client permission.
 * - Until verified customer testimonials are supplied by the business owner,
 *   this array remains empty and the UI renders an honest "Client feedback coming soon" state.
 */
export const VERIFIED_TESTIMONIALS: TestimonialItem[] = [];
