/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Books {
  title;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Books> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
