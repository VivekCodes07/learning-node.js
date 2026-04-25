import os from 'os';

const info = {
  osType: os.type(),
  platform: os.platform(),
  arch: os.arch(),
  cpuCores: os.cpus().length,
  freeMemoryMB: os.freemem() / 1024 / 1024,
  totalMemoryMB: os.totalmem() / 1024 / 1024,
  uptimeHours: os.uptime() / 3600,
  homeDir: os.homedir(),
};

console.log(info);