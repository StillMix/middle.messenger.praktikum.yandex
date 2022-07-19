export default class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  _template:any;
  static compile: any;
  constructor(template) {
    this._template = template;
  }

  compile(ctx) {
    return this._compileTemplate(ctx);
  }

  _compileTemplate(ctx) {
          let tmpl = this._template;
        const regExp = this.TEMPLATE_REGEXP;
        let key = regExp.exec(tmpl);
      
          // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
          while ((key)) {
          if (key[1]) {
                  const tmplValue = key[1].trim();
                  // get — функция, написанная ранее в уроке
            const data = function get(obj, path) {
              const keys = path.split('.');
          
              let result = obj;
              for (let key of keys) {
                const value = result[key];
          
                if (!value) {
                  return undefined;        
                }
          
                result = value;
              }
          
              return result;
          }
  
                  if (typeof data === "function") {
              window[tmplValue] = data;
              tmpl = tmpl.replace(
                new RegExp(key[0], "gi"),
                    `window.${key[1].trim()}()`
                  );
              continue;
            }

            tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
          }
          }
      
          return tmpl;
    }
  }
