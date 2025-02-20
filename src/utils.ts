type PossibleInput = string | object | Function | null;

function isFunction(input: PossibleInput): input is (...args: any[]) => any {
  return typeof input === "function";
}

export function replacePxWithDpi(input: PossibleInput): PossibleInput {
  if (input == null) return input;

  if (typeof input === "string") {
    return input.replace(/(\d*\.?\d+)px$/, (_, val) => val);
  }

  if (Array.isArray(input)) return input.map((val) => replacePxWithDpi(val));

  if (typeof input === "object") {
    const ret: Record<string, PossibleInput> = {};
    for (const key in input) {
      // @ts-ignore
      ret[key] = replacePxWithDpi(input[key]);
    }

    return ret;
  }

  if (isFunction(input)) {
    return function (...args: any[]): any {
      const replacedArgs = args.map((arg) => {
        if (typeof arg === "string") {
          return arg.replace(/(\d*\.?\d+)px/g, (_, val) => val);
        }
        return arg;
      });
      return input(...replacedArgs);
    };
  }

  return input;
}
