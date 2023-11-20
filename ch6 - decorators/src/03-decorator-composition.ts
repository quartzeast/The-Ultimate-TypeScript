function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}

type ComponentOptions = {
  selector: string;
};

// Decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log('Inerting the component in the DOM');
    };
  };
}

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}

// 首先调用 @Pipe，然后调用 @Component
