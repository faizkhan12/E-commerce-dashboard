"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { ReactElement, useState, useEffect } from "react";

export const Modalprovider = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <></>;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
