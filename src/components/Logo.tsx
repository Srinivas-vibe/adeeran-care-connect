import logoIcon from '@/assets/logo-icon.png';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoIcon} alt="Adeeran Home Care Logo" className="h-10 w-10 object-contain" />
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-primary font-display">Adeeran</span>
        <span className="text-xs text-muted-foreground tracking-wide">HOME CARE</span>
      </div>
    </div>
  );
};

export default Logo;
