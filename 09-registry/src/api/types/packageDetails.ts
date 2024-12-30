export interface PackageDetails {
  readonly name: string;
  readonly description: string;
  readonly readme: string;
  readonly author: {
    readonly name: string;
    readonly email: string;
  };
  readonly maintainers: {
    readonly name: string;
    readonly email: string;
  }[];
  readonly license: string;
}
