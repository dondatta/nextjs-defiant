"use client";
import Sidebar from '@/components/Sidebar';

export default function DashLayout({ children }) {
  return (
    <Sidebar>
      <section>{children}</section>;
    </Sidebar>
  );
}
