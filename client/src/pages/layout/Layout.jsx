import { AppBar, Footer } from '../../components'
import { Stack } from '../../common/components';
import { CartProvider } from '../../contexts'


export const Layout = ({children}) => {
  return (
    <CartProvider>
    <Stack>
      <AppBar />
      {children}
      <Footer />
    </Stack>
    </CartProvider>
  )
}


