import React, { useEffect } from 'react';
import './_Notification.scss';

type Props = {
  text: string;
  notification: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

function Notification({ text, notification }: Props): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      notification.setValue(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className={notification.value ? 'notification active' : 'notification'}>
      <div className="notification-container">
        <div className="notification-text">{text}</div>
      </div>
    </div>
  );
}

export default Notification;
