import { RepositoryProps } from '~/components/Controllers/Repository/Models';

export interface Props {
  data: RepositoryProps[];
  onEndReached: () => void;
  onPress: (data: RepositoryProps) => void;
}
