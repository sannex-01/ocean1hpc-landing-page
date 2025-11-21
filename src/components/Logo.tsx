import { Cpu } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 border-2 border-primary rounded-md flex items-center justify-center">
        <Cpu className="w-5 h-5 text-primary" />
      </div>
      <span className="text-xl font-semibold text-foreground">Ocean1 HPC</span>
    </div>
  );
};

export default Logo;
