"use client";

import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
}
