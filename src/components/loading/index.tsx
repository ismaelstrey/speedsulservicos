import React from "react";
interface Props {
  valor: number;
}
export default function Loading({ valor = 4 }: Props) {
  const RowsList = () => {
    for (let i = 1; i <= valor; i++) {
      return <div className="skeleton h-4 w-full"></div>;
    }
  };
  return (
    <div className="flex flex-col gap-4 full h-full">
      <RowsList />
    </div>
  );
}
