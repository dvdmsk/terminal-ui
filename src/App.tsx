import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './app/hooks';
import TerminalPage from './pages/TerminalPage/TerminalPage';
import LanguagesSelector from './pages/TerminalPage/components/TopBar/components/LanguagesSelector/LanguagesSelector';
import ArrowDownIco from './shared/components/icons/ArrowDownIco/ArrowDownIco';
import './utils/_global.scss';
import { useTranslation } from 'react-i18next';
import { setTerminals } from './features/terminal/terminalSlice';
import { terminals } from './api/terminals';

/* 
  The architecture is as follows:

  Basic principles:
  -components are divided into pages (pages), Fich (Features), shared elements (Shared), utilities (Utils) and types (Types)
  -The logic of the state is controlled through Redux Toolkit (see Features/Terminal/Terminalslice.ts)
  -Filtering/Sorting/Sorting Mammoized Terminals (App/Pagination.TS)
  -Localization implemented through I18NEXT (see I18.TS)
  -styles used modular SCSS

  📁 src/
    ┣ 📂App/-Redux Store, Cateptory Hooks, Selectors
    ┣ 📂Features/-Slices Redux (terminals, filters, etc.)
    ┣ 📂pages/-pages with interface (Terminalpage)
    ┣ 📂shared/-icons, components that are overwhelmed
    ┣ 📂types/-global types of project (terminals, sorting)
    ┣ 📂utils/-styles, mixes, utilities (eg export data)
    ┣ 📂assets/-static resources (flags, svg)
    ┣ 📄index.tsx -login point, connection Redux and I18N
    ┗ 📄i18.ts -Initialization of localization

  General logic:
  -Terminalpage is responsible for the entire interface: filters, list, pop
  -Filterblock allows you to set the filtration and sorting parameters
  -data is filtered only when pressed "Apply"
  -SelectfilterederratedTERMINALS SelektfilterederMinals returns only the necessary terminals with filters in mind
  -Terminalitem -Displaying one terminal with the support of switching currency
*/


function App() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  dispatch(setTerminals(terminals));

  return (
    <div className="App">
      {/* Terminal page */}
      <div className="container">
        <TerminalPage />
      </div>
    </div>
  );
}

export default App;
