const baseUrl = import.meta.env.VITE_API_URL;

/**
 * API routes.
 */
export const API_ROUTES = {
  collection: `${baseUrl}/api/capsules`,
  item: `${baseUrl}/api/capsules/:id`,
  unpublish: `${baseUrl}/api/capsules/:id/unpublish`,
};
