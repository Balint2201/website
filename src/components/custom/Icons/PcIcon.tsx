import { cn } from "@/lib/utils";

const PcIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      className={cn("fill-white", className)}
      viewBox="0 0 32 32"
    >
      <path d="M1.844 5.281h18.688c1.031 0 1.875 0.813 1.875 1.844v11.938c0 1.031-0.844 1.906-1.875 1.906h-7.281v3.094h5.313c0.781 0 0.844 2.563 0.938 2.656h-16.594s0-2.656 0.938-2.656h5.313v-3.094h-7.313c-1.031 0-1.844-0.875-1.844-1.906v-11.938c0-1.031 0.813-1.844 1.844-1.844zM1.844 19.063h18.688v-11.938h-18.688v11.938z" />
    </svg>
  );
};

export default PcIcon;