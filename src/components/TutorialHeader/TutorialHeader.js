import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

<HeaderGlobalBar>
  <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
    <Notification size={20} />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
    <UserAvatar size={20} />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
    <Switcher size={20} />
  </HeaderGlobalAction>

  <HeaderName element={Link} to="/" prefix="IBM">
    Carbon Tutorial
  </HeaderName>

  <HeaderMenuItem element={Link} to="/repos">
    Repositories
  </HeaderMenuItem>
</HeaderGlobalBar>;
