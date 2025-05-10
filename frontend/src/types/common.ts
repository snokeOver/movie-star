export interface IChildren {
  children: React.ReactNode;
}

type TParams = Promise<{ [key: string]: string }>;
type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export interface IPageWithProps {
  params: TParams;
}
export interface IPageWithParams {
  searchParams: TSearchParams;
}
export interface IPageWithPropsParams {
  params: TParams;
  searchParams: TSearchParams;
}
