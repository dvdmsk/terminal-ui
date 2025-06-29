declare module '*.module.scss' {
  const scssModuleClasses: { [key: string]: string };
  export default scssModuleClasses;
}

declare module '*.png' {
  const value: string;
  export default value;
}