/** @type {import('payload/config').PayloadConfig} */
import path from "path";

export default {
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",

  // DB is configured later (MongoDB/PostgreSQL). Leaving collections empty for now.
  collections: [],

  // Routes
  routes: {
    admin: "/admin",
    api: "/api/payload",
  },

  // Paths
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pathPrefix: "/",

  // Optional: foxglove auth can be added later
  // foxglove: {},
};