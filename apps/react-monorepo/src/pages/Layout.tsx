import React from "react";
import ConnectedParticles from "../components/ConnectedParticles_old";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <ConnectedParticles />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default Layout;
