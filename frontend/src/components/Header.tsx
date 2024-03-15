// @ts-ignore
import BCGovLogo from '@/assets/gov-bc-logo-horiz.png'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import Typography from '@mui/material/Typography'
import { HomeRounded, Menu } from '@mui/icons-material'
const styles = {
  appBar: {
    color: '#ffffff',
    backgroundColor: '#053662',
    borderBottom: '0.1em solid rgb(252, 186, 25) !important',
    display: 'flex',
    zIndex: (theme: any) => theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    margin: '0.2em',
    padding: '0.2em',
    color: '#ffffff',
    backgroundColor: '#ffffff',
  },
}
export default function Header() {
  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img style={{ maxHeight: '60px' }} alt="Logo" src={BCGovLogo} />
        <Typography >
          Organics Info
        </Typography>
        <a href={'/'} target={'_self'}>
          <IconButton>
            <Menu color="primary"></Menu>
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  )
}
