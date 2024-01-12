import React, { ReactNode } from 'react';

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white px-5 py-5 shadow-sm rounded-md ${className || ''}`}
    >
      {children}
    </div>
  );
}
