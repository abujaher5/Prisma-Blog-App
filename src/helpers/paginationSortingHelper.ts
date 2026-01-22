type IOptions = {
  page?: number | string;
  limit?: number | string;
  sortOrder?: string | undefined;
  sortBy?: string | undefined;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortOrder: string;
  sortBy: string;
};
const paginationSortingHelper = (options: IOptions): IOptionsResult => {
  // for pagination
  const page: number = Number(options.page) || 1;
  const limit: number = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  //   for sorting
  const sortBy: string = options.sortBy || "createdAt";
  const sortOrder: string = options.sortOrder || "desc";

  return { page, limit, skip, sortBy, sortOrder };
};

export default paginationSortingHelper;
