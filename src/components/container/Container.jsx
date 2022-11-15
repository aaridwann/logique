import Head from "next/head";
import React, { Suspense } from "react";

function ContainerComponent({ children, title }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="min-h-screen max-w-screen-sm border-2 mx-auto relative">{children}</main>
    </Suspense>
  );
}

export default React.memo(ContainerComponent);
