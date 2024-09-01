import { lazy, Suspense } from "react";

export function lazyLoadRoutes(componentName) {
  const LazyElement = lazy(() => import(`../pages/${componentName}`));

  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
}
