import { styled } from '@mui/material/styles';
import Avatar from '../../../../assets/images/avatar.png';
import { Box, Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';

const StyledHero = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const StyledImage = styled('img')(() => ({
  width: '100%',
  borderRadius: '50%',
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Avatar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box position="relative">
              <Box position="absolute" width="150%" top={-100} right={0}>
                <AnimatedBackground />
              </Box>

              <Box position="relative" textAlign='center'>
                <StyledImage src={Avatar} alt="Avatar" />
              </Box>
            </Box>
          </Grid>

          {/* Texto + Botões */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3rem',
                  md: '3.5rem',
                },
                whiteSpace: 'nowrap',
              }}
            >
              Adriano Santos
            </Typography>

            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              I'm a Software Engineer
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{ mt: 4, justifyContent: 'center' }}
            >
              <Grid
                size={{ xs: 12, md: 'auto' }}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <StyledButton onClick={() => console.log('download')} startIcon={<DownloadIcon />}>
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>

              <Grid
                size={{ xs: 12, md: 'auto' }}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <StyledButton onClick={() => console.log('contact')} startIcon={<EmailOutlinedIcon />}>
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
