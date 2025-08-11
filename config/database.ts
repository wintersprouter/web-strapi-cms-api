import path from "path";

export default ({
  env,
}: {
  env: (key: string, defaultValue?: string) => string;
}) => {
  const client = env("DATABASE_CLIENT", "sqlite") as
    | "mysql"
    | "postgres"
    | "sqlite";

  const connections = {
    mysql: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: parseInt(env("DATABASE_PORT", "3306")),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env("DATABASE_SSL", "false") === "true" && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized:
            env("DATABASE_SSL_REJECT_UNAUTHORIZED", "true") === "true",
        },
      },
      pool: {
        min: parseInt(env("DATABASE_POOL_MIN", "2")),
        max: parseInt(env("DATABASE_POOL_MAX", "10")),
      },
    },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: parseInt(env("DATABASE_PORT", "5432")),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env("DATABASE_SSL", "false") === "true" && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized:
            env("DATABASE_SSL_REJECT_UNAUTHORIZED", "true") === "true",
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: parseInt(env("DATABASE_POOL_MIN", "2")),
        max: parseInt(env("DATABASE_POOL_MAX", "10")),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db"),
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: parseInt(
        env("DATABASE_CONNECTION_TIMEOUT", "60000"),
      ),
    },
  };
};
