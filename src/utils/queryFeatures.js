import slugify from "slugify";

export const buildQueryOptions = (keyword, sortBy, sortOrder) => {
  const filter = {};
  const sort = {};

  if (keyword) {
    const keywordSlug = slugify(keyword, {
      replacement: "-",
      remove: undefined,
      lower: true,
      strict: true,
      locale: "vi",
      trim: true,
    });

    if (sortBy && ["asc", "desc"].includes(sortOrder)) {
      sort[sortBy] = sortOrder === "asc" ? 1 : -1;
    }

    const regKeyword = new RegExp(keywordSlug, "i");
    filter.$or = [
      {
        slug: regKeyword,
      },
    ];
  }

  return {
    filter,
    sort,
  };
};
