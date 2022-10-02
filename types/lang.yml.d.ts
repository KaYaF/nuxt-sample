declare module '*.lang.yml' {
  type obj = {[propName: string]: string};
  const langYml: {[propName: string]: obj | string};

  export default langYml;
}
