import { createHypertuneAdapter } from "@flags-sdk/hypertune";
import { type Identify } from "flags";
import { dedupe, flag } from "flags/next";
import {
  createSource,
  flagFallbacks,
  vercelFlagDefinitions as flagDefinitions,
  type Context,
  type FlagValues,
} from "./generated/hypertune";

// Used for targeted features
const identify: Identify<Context> = dedupe(
  async ({ headers, cookies }) => {
    return {
      environment: process.env.NODE_ENV,
      user: {
        id: "anonymous",
        name: "Guest",
        email: '',
      },
    }
  }
);

const hypertuneAdapter = createHypertuneAdapter<
  FlagValues,
  Context
>({ createSource, flagFallbacks, flagDefinitions, identify });

export const showProjects = flag(
  hypertuneAdapter.declarations.showProjects
);

export const showLastSeen = flag(
  hypertuneAdapter.declarations.showLastSeen
);