import * as migration_20251205_222941 from './20251205_222941';
import * as migration_20251205_224942_allow_null_subheading from './20251205_224942_allow_null_subheading';
import * as migration_20251205_231953 from './20251205_231953';
import * as migration_20260215_205617 from './20260215_205617';

export const migrations = [
  {
    up: migration_20251205_222941.up,
    down: migration_20251205_222941.down,
    name: '20251205_222941',
  },
  {
    up: migration_20251205_224942_allow_null_subheading.up,
    down: migration_20251205_224942_allow_null_subheading.down,
    name: '20251205_224942_allow_null_subheading',
  },
  {
    up: migration_20251205_231953.up,
    down: migration_20251205_231953.down,
    name: '20251205_231953',
  },
  {
    up: migration_20260215_205617.up,
    down: migration_20260215_205617.down,
    name: '20260215_205617'
  },
];
