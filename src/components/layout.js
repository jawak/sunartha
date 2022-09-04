import { Container } from '@mui/material';
import Sidebar from './sidebar';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar />
      <Container maxWidth="lg" className="mt-20">
        {children}
      </Container>
    </div>
  );
}
