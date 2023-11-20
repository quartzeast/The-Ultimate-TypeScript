type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameter: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameter.push({
    methodName,
    parameterIndex,
  });
}

class Vehiche {
  move(@Watch speed: number) {}
}
