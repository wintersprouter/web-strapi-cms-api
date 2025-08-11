export default ({
  env,
}: {
  env: (key: string, defaultValue?: string) => string;
}) => ({
  host: env("HOST", "0.0.0.0"),
  port: parseInt(env("PORT", "1337")),
  app: {
    keys: env("APP_KEYS", "").split(",").filter(Boolean),
  },
});
