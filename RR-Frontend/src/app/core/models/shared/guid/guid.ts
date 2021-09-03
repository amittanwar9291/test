export class Guid {
  public static EMPTY = '00000000-0000-0000-0000-000000000000';

  public static isEmpty(value: string): boolean {
    return value === Guid.EMPTY;
  }

  public static createEmpty(): string {
    return this.EMPTY;
  }

  public static create(): string {
    return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
  }

  private static gen(count: number) {
    let out = '';
    for (let i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  }
}
