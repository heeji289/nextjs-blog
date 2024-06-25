'use client';

import { Theme } from '@/lib/types';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaRegSun } from 'react-icons/fa';
import { Button } from './ui/button';

export default function ThemeToggle({
  themeProps = Theme.light,
}: {
  themeProps?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(themeProps);

  const handleClickButton = () => {
    const toggle = document.documentElement.classList.toggle(Theme.dark);
    const theme = toggle ? Theme.dark : Theme.light;
    document.cookie = `theme=${theme}`;
    setTheme(theme);
  };

  useEffect(() => {
    if (document.documentElement.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  }, []);

  return (
    <Button variant={'ghost'} onClick={handleClickButton}>
      {theme === Theme.light ? <FaMoon /> : <FaRegSun />}
    </Button>
  );
}
