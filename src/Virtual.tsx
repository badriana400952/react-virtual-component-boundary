import React from "react";

// Base renderer
const VirtualBase: React.FC<{ name: string; children: React.ReactNode }> = ({
  name,
  children,
}) => (
  <section
    data-virtual={name.toLowerCase()}
    className="border-dashed border-2 border-gray-400 rounded p-3 my-2"
  >
    <h3 className="text-gray-600">{name}</h3>
    {children}
  </section>
);

// Proxy + type assertion untuk TypeScript
export const Virtual: Record<
  string,
  React.FC<{ children: React.ReactNode }>
> = new Proxy(
  {},
  {
    get: (_, prop: string) => {
      return ({ children }: { children: React.ReactNode }) => (
        <VirtualBase name={prop}>{children}</VirtualBase>
      );
    },
  }
);
