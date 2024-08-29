import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
