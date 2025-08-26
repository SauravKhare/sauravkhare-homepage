import * as migration_20250716_124545 from './20250716_124545';
import * as migration_20250826_120502 from './20250826_120502';
import * as migration_20250826_121820 from './20250826_121820';
import * as migration_20250826_122537 from './20250826_122537';
import * as migration_20250826_122817 from './20250826_122817';

export const migrations = [
  {
    up: migration_20250716_124545.up,
    down: migration_20250716_124545.down,
    name: '20250716_124545',
  },
  {
    up: migration_20250826_120502.up,
    down: migration_20250826_120502.down,
    name: '20250826_120502',
  },
  {
    up: migration_20250826_121820.up,
    down: migration_20250826_121820.down,
    name: '20250826_121820',
  },
  {
    up: migration_20250826_122537.up,
    down: migration_20250826_122537.down,
    name: '20250826_122537',
  },
  {
    up: migration_20250826_122817.up,
    down: migration_20250826_122817.down,
    name: '20250826_122817'
  },
];
