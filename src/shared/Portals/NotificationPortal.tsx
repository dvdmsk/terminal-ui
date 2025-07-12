import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const NotificationPortal: React.FC<Props> = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot);
};

export default NotificationPortal;
