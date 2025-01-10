import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { WPContextProvider } from '@/context.tsx';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<WPContextProvider>
			<App />
		</WPContextProvider>
	</StrictMode>,
);
