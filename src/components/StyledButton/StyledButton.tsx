import { styled } from '@mui/material/styles';

const StyledButtonRoot = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: `1px solid ${theme.palette.primary.contrastText}`,
  padding: '5px 15px',
  borderRadius: '3px',
  width: '100%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

type StyledButtonProps = {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick: () => void
};

const StyledButton = ({ children, startIcon, onClick }: StyledButtonProps) => {
  return (
    <StyledButtonRoot onClick={onClick}>
      {startIcon}
      {children}
    </StyledButtonRoot>
  );
};

export default StyledButton;
