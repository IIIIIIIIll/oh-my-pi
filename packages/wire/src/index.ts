/**
 * Shared agent wire constants.
 *
 * This fork stripped the collab live-session protocol (frames, relay
 * constants, session mirror types) — see upstream history for those
 * definitions. Only cross-package constants with no external-transmission
 * surface remain here.
 */

/** Parameter key used for intent tracing (e.g. prompt explanation/reasoning) */
export const INTENT_FIELD = "i";
