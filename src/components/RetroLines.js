import React from 'react';
import './styles/RetroLines.css';

function RetroLines() {
  return (
    <div className="retroLines">
      <div className="retroLines__blackInside">
        {/* Red Line */}
        <div className="retroLines__red">
          <div className="retroLines__redInside">
            {/* Orange Line */}
            <div className="retroLines__orange">
              <div className="retroLines__orangeInside">
                {/* Yellow Line */}
                <div className="retroLines__yellow">
                  <div className="retroLines__yellowInside">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RetroLines;
