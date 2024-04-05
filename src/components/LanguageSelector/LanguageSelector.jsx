import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function LanguageSelector() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ua')}>UA</button>
    </div>
  );
}

export default LanguageSelector;
