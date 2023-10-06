const styles = {
  button: {
    background:
      'linear-gradient(111.97deg,#f18b2a -8.95%,#dc3323 46.81%,#7c2038 102.95%)',
    fontWeight: 700,
    color: '#fff',
    backgroundSize: '100%',
    transition: 'all .4s ease-in-out',
    '-webkitTransition': 'all .4s ease-in-out',
    '&:hover': {
      backgroundSize: '150%',
    },
    '&[disabled]': {
      background: 'rgba(0, 0, 0, 0.12)',
    },
  },
};

export default styles;
