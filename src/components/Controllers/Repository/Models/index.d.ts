export interface RepositoryProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  stars: number;
  url: string;
}

export interface Props {
  data: RepositoryProps;
  onPress: (data: RepositoryProps) => void;
}
