export interface PackageDetails {
  readonly name: string;
  readonly description: string;
  readonly readme: string;
  readonly author: {
    readonly name: string;
    readonly email: string;
  };
  readonly mainteners: {
    readonly name: string;
    readonly email: string;
  }[];
  readonly license: string;
}
