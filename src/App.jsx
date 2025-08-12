import Header from './Header.jsx'
import InputWordleWord from './InputWordleWord.jsx';
import PatternTile from './PatternTile.jsx'
import SubmitButton from './SubmitButton.jsx'
import ResetButton from './ResetButton.jsx'

function App() {
  return (
    <div className = "Webpage">
      <div className = "HeaderDivBlock">
        <Header/>
      </div>
      <InputWordleWord/>

      <div className = "PatternTileRowDiv">
        <PatternTile className = "PatternTileSquare" idname = "r1c1"/>
        <PatternTile className = "PatternTileSquare" idname = "r1c2"/>
        <PatternTile className = "PatternTileSquare" idname = "r1c3"/>
        <PatternTile className = "PatternTileSquare" idname = "r1c4"/>
        <PatternTile className = "PatternTileSquare" idname = "r1c5"/>
      </div>

      <div className = "PatternTileRowDiv">
        <PatternTile idname = "r2c1"/>
        <PatternTile idname = "r2c2"/>
        <PatternTile idname = "r2c3"/>
        <PatternTile idname = "r2c4"/>
        <PatternTile idname = "r2c5"/>
      </div>

      <div className = "PatternTileRowDiv">
        <PatternTile idname = "r3c1"/>
        <PatternTile idname = "r3c2"/>
        <PatternTile idname = "r3c3"/>
        <PatternTile idname = "r3c4"/>
        <PatternTile idname = "r3c5"/>
      </div>

      <div className = "PatternTileRowDiv">
        <PatternTile idname = "r4c1"/>
        <PatternTile idname = "r4c2"/>
        <PatternTile idname = "r4c3"/>
        <PatternTile idname = "r4c4"/>
        <PatternTile idname = "r4c5"/>
      </div>

      <div className = "PatternTileRowDiv">
        <PatternTile idname = "r5c1"/>
        <PatternTile idname = "r5c2"/>
        <PatternTile idname = "r5c3"/>
        <PatternTile idname = "r5c4"/>
        <PatternTile idname = "r5c5"/>
      </div>

      <div className = "PatternTileRowDiv">
        <PatternTile idname = "r6c1"/>
        <PatternTile idname = "r6c2"/>
        <PatternTile idname = "r6c3"/>
        <PatternTile idname = "r6c4"/>
        <PatternTile idname = "r6c5"/>
      </div>

      <div className = "FunctionalButtons">
        <SubmitButton/>
        <ResetButton/>
      </div>
    </div>
  );
}

export default App