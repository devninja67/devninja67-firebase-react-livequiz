import React from 'react';
import { translate } from  'react-i18next';

function Connecting(props) {
  const { t } = props;
  return <div className="main main-wrap--center">
    {t('connecting')}
  </div>
}

export default translate("translations")(Connecting)
