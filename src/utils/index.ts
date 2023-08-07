import { RepositoriesProps } from '~/hooks/Repositories/Models';

export const formatStarsToK = (number: number) => {
  if (number >= 1000) {
    const thousand = Math.floor(number / 1000);
    const remaining = number % 1000;
    const decimalPart = remaining >= 100 ? `.${Math.floor(remaining / 100)}` : '';

    return `${thousand}${decimalPart}k`;
  }

  return number.toString();
};

export const isSubarray = (
  repositories: RepositoriesProps[],
  requestedRepositories: RepositoriesProps[],
) => {
  return requestedRepositories.every((item) => repositories.includes(item));
};
