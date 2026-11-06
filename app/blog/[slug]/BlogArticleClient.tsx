"use client";

import { useState } from "react";

export default function BlogArticleClient({
  children,
  back,
}: {
  children: React.ReactNode;
  back?: boolean;
}) {
  return <>{children}</>;
}
