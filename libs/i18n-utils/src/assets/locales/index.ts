const modules = import.meta.glob('./*/**/*.json', { eager: true });

const resources: Record<string, any> = {};

for (const path in modules) {
  const match = path.match(/\.\/([^/]+)\/([^/]+)\.json$/);
  if (match) {
    const folder = match[1];
    const file = match[2];

    if (!resources[folder]) {
      resources[folder] = {};
    }

    resources[folder][file] = modules[path];
  }
}

export { resources };
