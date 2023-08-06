export interface RepositoryProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  stars: number;
}

export interface Props {
  data: RepositoryProps;
}
