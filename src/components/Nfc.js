import Scan from '../containers/Scan';
import Write from '../containers/Write';
import { useState } from 'react';
import { ActionsContext } from '../contexts/context';


function App() {

  const [actions, setActions] = useState(null);
  const {scan, write} = actions || {};

  const actionsValue = {actions,setActions};

  const onHandleAction = (actions) =>{
    setActions({...actions});
  }

  return (
      <div className="nfc">
        <div className="nfc-container">
          <button onClick={()=>onHandleAction({scan: 'scanning', write: null})} className="nfc-btn">Scan</button>
          <button onClick={()=>onHandleAction({scan: null, write: 'writing'})} className="nfc-btn">Write</button>
        </div>
        <ActionsContext.Provider value={actionsValue}>
          {scan && <Scan/>}
          {write && <Write/>}
        </ActionsContext.Provider>
      </div>
  );
}

export default App;
