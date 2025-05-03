export interface IChildren {
  children: React.ReactNode;
}

export type Params = { id: string };
export type SearchParams = { [key: string]: string | string[] | undefined };

export interface IPageWithProps {
  params?: Params;
  searchParams?: SearchParams;
}
