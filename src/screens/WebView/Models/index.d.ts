import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootParamList } from '~/routes/Models';

type RouteProps = NativeStackScreenProps<RootParamList, 'WebViewScreen'>;

export interface Props extends RouteProps {}
