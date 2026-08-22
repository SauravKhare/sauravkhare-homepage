import * as migration_20251205_222941 from './20251205_222941';
import * as migration_20251205_224942_allow_null_subheading from './20251205_224942_allow_null_subheading';
import * as migration_20251205_231953 from './20251205_231953';
import * as migration_20260215_205617 from './20260215_205617';
import * as migration_20260304_214511 from './20260304_214511';
import * as migration_20260316_112606 from './20260316_112606';
import * as migration_20260316_121639 from './20260316_121639';
import * as migration_20260316_122229 from './20260316_122229';
import * as migration_20260516_042852 from './20260516_042852';
import * as migration_20260819_043625_v3_db_changes from './20260819_043625_v3_db_changes';
import * as migration_20260820_215620_add_now_description from './20260820_215620_add_now_description';
import * as migration_20260820_230000_add_section_visibility from './20260820_230000_add_section_visibility';
import * as migration_20260822_112030_v3_major from './20260822_112030_v3_major';

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
    name: '20260316_122229',
  },
  {
    up: migration_20260516_042852.up,
    down: migration_20260516_042852.down,
    name: '20260516_042852',
  },
  {
    up: migration_20260819_043625_v3_db_changes.up,
    down: migration_20260819_043625_v3_db_changes.down,
    name: '20260819_043625_v3_db_changes',
  },
  {
    up: migration_20260820_215620_add_now_description.up,
    down: migration_20260820_215620_add_now_description.down,
    name: '20260820_215620_add_now_description',
  },
  {
    up: migration_20260820_230000_add_section_visibility.up,
    down: migration_20260820_230000_add_section_visibility.down,
    name: '20260820_230000_add_section_visibility',
  },
  {
    up: migration_20260822_112030_v3_major.up,
    down: migration_20260822_112030_v3_major.down,
    name: '20260822_112030_v3_major'
  },
];
