const requireEnv = (key: string): string => {
  const value = import.meta.env[key];
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const API_BASE_URL = requireEnv("VITE_APP_API_URL");
