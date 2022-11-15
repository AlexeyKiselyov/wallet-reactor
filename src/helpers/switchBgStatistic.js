export const switchBgChart = name => {
  switch (name) {
    case 'Basic expenses':
      return '#81E1FF';
    case 'Products':
      return '#FFD8D0';
    case 'Car':
      return '#FD9498';
    case 'Self care':
      return '#C5BAFF';
    case 'Child care':
      return '#6E78E8';
    case 'Household products':
      return '#4A56E2';
    case 'Education':
      return '#81E1FF';
    case 'Leisure':
      return '#24CCA7';
    default:
      return '#00AD84';
  }
};

export const switchBgStatistic = ({ name, theme: { colors } }) => {
  switch (name) {
    case 'Main expenses':
      return colors.yellow;
    case 'Products':
      return colors.lReddy;
    case 'Car':
      return colors.reddy;
    case 'Self care':
      return colors.lPurple;
    case 'Child care':
      return colors.lBlue;
    case 'Household products':
      return colors.btBlue;
    case 'Education':
      return colors.lBlight;
    case 'Leisure':
      return colors.lGreen;
    case 'Entertainment':
      return colors.btPink;
    case 'Other expenses':
      return colors.green;
    default:
      return colors.btBlue;
  }
};
