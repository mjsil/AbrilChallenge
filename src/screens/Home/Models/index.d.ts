import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootParamList } from '~/routes/Models';

type RouteProps = NativeStackScreenProps<RootParamList, 'HomeScreen'>;

export interface Props extends RouteProps {}
