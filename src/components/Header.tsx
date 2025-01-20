import { Switch } from "@/components/ui/switch";

interface HeaderProps {
  theme: string;
  toggleTheme: (checked: boolean) => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="text-2xl font-bold tracking-wide">D.Fomin</div>
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
    </div>
  );
}