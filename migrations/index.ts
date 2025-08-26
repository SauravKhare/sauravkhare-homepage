import * as migration_20250716_124545 from './20250716_124545';
import * as migration_20250826_120502 from './20250826_120502';

export const migrations = [
  {
    up: migration_20250716_124545.up,
    down: migration_20250716_124545.down,
    name: '20250716_124545',
  },
  {
    up: migration_20250826_120502.up,
    down: migration_20250826_120502.down,
    name: '20250826_120502'
  },
];
