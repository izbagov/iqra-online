export const getTheme = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as string;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export const setThemeColor = (isLight: boolean) => {
  const root = document.documentElement;
  if (isLight) {
    window.localStorage.setItem('theme', 'light');
    root.classList.remove('dark');
  } else {
    window.localStorage.setItem('theme', 'dark');
    root.classList.add('dark');
  }
};
