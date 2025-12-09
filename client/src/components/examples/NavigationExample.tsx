import Navigation from '../portfolio/Navigation';
import { useState } from 'react';

export default function NavigationExample() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="min-h-[120px]">
      <Navigation isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
    </div>
  );
}
