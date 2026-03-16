import * as migration_20251205_222941 from './20251205_222941';
import * as migration_20251205_224942_allow_null_subheading from './20251205_224942_allow_null_subheading';
import * as migration_20251205_231953 from './20251205_231953';
import * as migration_20260215_205617 from './20260215_205617';
import * as migration_20260304_214511 from './20260304_214511';
import * as migration_20260316_112606 from './20260316_112606';
import * as migration_20260316_121639 from './20260316_121639';
import * as migration_20260316_122229 from './20260316_122229';

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
    name: '20260215_205617',
  },
  {
    up: migration_20260304_214511.up,
    down: migration_20260304_214511.down,
    name: '20260304_214511',
  },
  {
    up: migration_20260316_112606.up,
    down: migration_20260316_112606.down,
    name: '20260316_112606',
  },
  {
    up: migration_20260316_121639.up,
    down: migration_20260316_121639.down,
    name: '20260316_121639',
  },
  {
    up: migration_20260316_122229.up,
    down: migration_20260316_122229.down,
    name: '20260316_122229'
  },
];
