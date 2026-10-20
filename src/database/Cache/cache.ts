type CacheEntry = {
  value: unknown;
  expiresAt: number;
};

const store = new Map<string, CacheEntry>();

export class Cache {
  private static _instance: Cache;
  private defaultExpiry = 86400;

  public static getInstance(): Cache {
    if (!Cache._instance) {
      Cache._instance = new Cache();
    }
    return Cache._instance;
  }

  public async get(name: string): Promise<string | null> {
    const entry = store.get(name);
    if (!entry || entry.expiresAt <= Date.now()) {
      store.delete(name);
      return null;
    }
    return typeof entry.value === "string"
      ? entry.value
      : JSON.stringify(entry.value);
  }

  public async set(
    name: string,
    value: string,
    expiry: number = this.defaultExpiry,
  ): Promise<void> {
    store.set(name, {
      value,
      expiresAt: Date.now() + expiry * 1000,
    });
  }

  public async hget(name: string): Promise<unknown | null> {
    const entry = store.get(name);
    if (!entry || entry.expiresAt <= Date.now()) {
      store.delete(name);
      return null;
    }
    return entry.value;
  }

  public async hset(
    name: string,
    data: unknown,
    expiry: number = this.defaultExpiry,
  ): Promise<void> {
    store.set(name, {
      value: data,
      expiresAt: Date.now() + expiry * 1000,
    });
  }

  public delete(name: string): void {
    store.delete(name);
  }
}
