export default defineNitroPlugin(() => {
  // Only run migrations in development
  if (import.meta.dev) {
    onHubReady(async () => {
      console.log("onHubReady: Migrating database...");
      await hubDatabase().exec(
        `
        CREATE TABLE IF NOT EXISTS insights (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          domain TEXT NOT NULL,
          data TEXT NOT NULL,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `.replace(/\n/g, "")
      );

      await hubDatabase().exec(
        `
        CREATE TABLE IF NOT EXISTS comparisons (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          domain_1 TEXT NOT NULL,
          domain_2 TEXT NOT NULL,
          data TEXT NOT NULL,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `.replace(/\n/g, "")
      );
    });
  }
});
