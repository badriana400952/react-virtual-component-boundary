import React from "react";


const VirtualBase: React.FC<{ name: string; children: React.ReactNode }> = ({
  name,
  children,
}) => {
  return (
    <section
      data-virtual={name.toLowerCase()}
      style={{
        border: "1px dashed #888",
        borderRadius: "8px",
        padding: "12px",
        margin: "8px 0",
      }}
    >
      <h3 style={{ margin: "0 0 8px", color: "#555" }}>{name}</h3>
      {children}
    </section>
  );
};

export const Virtual = new Proxy(
  {},
  {
    get: (_, prop: string) => {
      const DynamicComponent: React.FC<{ children: React.ReactNode }> = ({
        children,
      }) => <VirtualBase name={prop}>{children}</VirtualBase>;

      DynamicComponent.displayName = String(prop);
      return DynamicComponent;
    },
  }
);
