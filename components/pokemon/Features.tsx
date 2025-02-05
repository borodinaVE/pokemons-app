import ProgressBar from '@/components/mui/ProgressBar';
import { View } from 'react-native';

type Props = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

export const Features = ({ hp, attack, defense, speed }: Props) => {
  return (
    <View style={{ width: 80, height: 150 }}>
      <ProgressBar
        dom={{ matchContents: true }}
        name="HP"
        value={hp}
        color="info"
      />
      <ProgressBar
        dom={{ matchContents: true }}
        name="Attack"
        value={attack}
        color="error"
      />
      <ProgressBar
        dom={{ matchContents: true }}
        name="Defense"
        value={defense}
        color="success"
      />
      <ProgressBar
        dom={{ matchContents: true }}
        name="Speed"
        value={speed}
        color="primary"
      />
    </View>
  );
};
